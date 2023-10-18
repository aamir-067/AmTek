const hre = require("hardhat");

async function main() {
  const AmTek = await ethers.getContractFactory("AmTek");
  const depContract = await AmTek.deploy();
  console.log('Deploy at address : ', depContract.target);
  process.exit(0);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
