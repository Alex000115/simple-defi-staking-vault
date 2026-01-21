# Simple DeFi Staking Vault

This repository contains a professional, audited-style implementation of a Single-Asset Staking Vault. It is designed to be a "flat" architecture for educational clarity and rapid deployment.

### Features
* **ERC20 Staking:** Deposit tokens to earn rewards.
* **Proportional Rewards:** Rewards are distributed based on the percentage of the pool owned.
* **Security First:** Includes Reentrancy guards and Emergency Stop functionality.
* **Web3 Integration:** Includes a simple ethers.js script for frontend interaction.

### Quick Start
1. Deploy `Vault.sol` using Remix or Hardhat.
2. Update `config.js` with your contract address.
3. Run `interaction.js` to stake your first tokens.
