import {ethers, network} from "hardhat"
import {Signer, Contract, ContractFactory, BigNumber} from "ethers"
import chai from "chai"
import type {SignerWithAddress} from "@nomiclabs/hardhat-ethers/signers"
import {
    TokenERC20,
    TokenERC20__factory,
} from "../typechain-types";

const {expect} = chai

function ether(eth: string) {
    let weiAmount = ethers.utils.parseEther(eth)
    return weiAmount;
}

describe("Token", async function () {
    let owner: SignerWithAddress;
    let user1: SignerWithAddress;
    let Token: TokenERC20__factory;
    let token: TokenERC20;

    beforeEach("Deploy contract", async function () {
        [owner, user1] = await ethers.getSigners();

        Token = new TokenERC20__factory(owner);

        token = await Token.deploy(1000000000);
        await token.deployed();
    });

    it("Correctly the constructor's work", async function () {
        expect(await token.balanceOf(owner.address)).to.equal(ether("1000000000"))
    });
});
