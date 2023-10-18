// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Pausable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";

contract AmTek is ERC721, ERC721Pausable, Ownable, ERC721Burnable {
    uint256 private _nextTokenId;
    uint public constant maxSupply = 9998;
    uint public nftPrice = 0.001 ether;

    constructor() ERC721("AmTek", "MTK") Ownable(msg.sender) {}

    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }

    function _baseURI() internal pure override returns (string memory) {
        return
            "https://ipfs.io/ipfs/QmPMc4tcBsMqLRuCQtPmPe84bpSjrC3Ky7t3JWuHXYB4aS/";
    }

    function getUri() public pure returns (string memory) {
        return
            "https://ipfs.io/ipfs/QmPMc4tcBsMqLRuCQtPmPe84bpSjrC3Ky7t3JWuHXYB4aS/";
    }

    function totalSupply() public view returns (uint) {
        return _nextTokenId;
    }

    //================= minting public. ==============
    function simpleMint(uint value, uint _price) internal {
        require(maxSupply > _nextTokenId, "max supply reached");
        require(value >= _price, "not enough funds");
        require(paused() == false, "minting is prhibited right now");
        uint256 tokenId = _nextTokenId++;
        _safeMint(msg.sender, tokenId);
    }

    function publicMint() public payable {
        uint preSalePrice = 0.00031 ether;
        tokenPreSale != preSale.started
            ? simpleMint(msg.value, nftPrice)
            : simpleMint(msg.value, preSalePrice);
    }

    // =========== pre-sale start/end ============
    enum preSale {
        notStarted,
        started,
        ended
    }
    uint public preSaleEndTime;

    event PreSaleUpdate(preSale);
    preSale public tokenPreSale = preSale.notStarted;

    function schedulePreSale(uint _time) public onlyOwner {
        preSaleEndTime = block.timestamp + _time;
    }

    function startPreSale() public onlyOwner {
        require(tokenPreSale == preSale.notStarted, "pre Sale ended");
        tokenPreSale = preSale.started;
        emit PreSaleUpdate(tokenPreSale);
    }

    function endPreSale() public onlyOwner {
        require(
            tokenPreSale == preSale.started,
            "pre sale ended or not yet started"
        );
        require(
            block.timestamp >= preSaleEndTime,
            "Cant End Pre-sale right now"
        );
        tokenPreSale = preSale.ended;
        emit PreSaleUpdate(tokenPreSale);
    }

    // ================ specialMinting ===============
    mapping(address => bool) public specialPersons;

    function specialMint() public payable {
        require(specialPersons[msg.sender], "you are not in list");
        specialPersons[msg.sender] = false;
        simpleMint(msg.value, 0.0003 ether);
    }

    function addToSpecial(address _peer) public onlyOwner {
        specialPersons[_peer] = true;
    }

    // ========== change nft Price ==============
    event PriceChange(uint);

    function changePrice(uint _price) public onlyOwner {
        nftPrice = _price;
        emit PriceChange(_price);
    }

    // =========== withdraw amount onlyDeveloper ===========
    function withdrawBalance() public onlyOwner {
        payable(msg.sender).transfer(address(this).balance);
    }

    // The following functions are overrides required by Solidity.

    function _update(
        address to,
        uint256 tokenId,
        address auth
    ) internal override(ERC721, ERC721Pausable) returns (address) {
        return super._update(to, tokenId, auth);
    }
}
