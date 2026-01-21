async function main() {
  const Vault = await ethers.getContractFactory("Vault");
  const vault = await Vault.deploy("0x..."); // Token address
  console.log("Vault deployed to:", vault.address);
}
