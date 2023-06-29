const { ethers } = require("hardhat");

async function main() {
  const FGrant = await ethers.getContractFactory("FGrant");
  const fgrant = await FGrant.deploy();
  await fgrant.deployed();

  console.log("Fantom Grant Contract deployed to:", fgrant.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
