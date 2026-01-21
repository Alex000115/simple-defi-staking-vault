const { ethers } = require("ethers");

async function getBalance(address, provider) {
    const balance = await provider.getBalance(address);
    return ethers.formatEther(balance);
}

console.log("Web3 Interaction Script Loaded");
