import hardhat, { ethers } from "hardhat";

function ether(eth: string) {
    let weiAmount = ethers.utils.parseEther(eth)
    return weiAmount;
}

async function main() {

  const Token = await ethers.getContractFactory("TokenERC20");
  const token = await Token.deploy(1000000000);
  await token.deployed();

  console.log("Token deployed to:", token.address);

  console.log("Waiting for 10 confirmations")
  await token.deployTransaction.wait(10)
  console.log("Confirmed!")

  console.log("Verifying...")
  await hardhat.run("verify:verify", {
    address: token.address,
    constructorArguments: [1000000000],
  })
  console.log("VERIFICATION COMPLETE")
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});