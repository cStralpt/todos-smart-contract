import { ethers } from "hardhat";

async function main() {
  // const lockedAmount = ethers.parseEther("0.001");
  const ownerName = "Satriaali";
  const todo = await ethers.deployContract("Todo", [ownerName]);

  await todo.waitForDeployment();

  console.log(`Todo deployed to ${todo.target}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
