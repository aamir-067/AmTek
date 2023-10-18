const { expect } = require("chai");
const { ethers } = require("hardhat");
describe("AmTek", () => {
    let contract;
    beforeEach(async () => {
        const AmTek = await ethers.getContractFactory("AmTek");
        contract = await AmTek.deploy();
    });

    describe("Deployment", async () => {

    })
})