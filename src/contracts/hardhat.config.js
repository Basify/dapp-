require('@nomicfoundation/hardhat-toolbox');
require('@nomiclabs/hardhat-ethers');
require('@openzeppelin/hardhat-upgrades');

/** @type import('hardhat/config').HardhatUserConfig */
require('dotenv').config();

const PRIVATE_KEY = process.env.PRIVATE_KEY;
const BSC_MAINNET_KEY = process.env.BSC_MAINNET_KEY;
const POLYGON_API_KEY = process.env.POLYGON_API_KEY;
const MAINNET_API_KEY = process.env.MAINNET_API_KEY;
const BASE_API_KEY = process.env.BASE_API_KEY;

module.exports = {
  solidity: {
    version: '0.8.18',
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
    },
  },
  etherscan: {
    apiKey: {
      bscTestnet: BSC_MAINNET_KEY,
      polygon: POLYGON_API_KEY,
      mainnet: 'fb394902-fd60-4a94-aa35-729ac1148662',
      bsc: BSC_MAINNET_KEY,
      sepolia: MAINNET_API_KEY,
      base: BASE_API_KEY,
    },
    customChains: [
      {
        network: 'base',
        chainId: 8453,
        urls: {
          apiURL: 'https://api.basescan.org/api',
          browserURL: 'https://basescan.org/',
        },
      },
    ],
  },

  networks: {
    hardhat: {
      gas: 'auto',
    },

    ganache: {
      url: 'HTTP://127.0.0.1:8545',
      chainId: 1337,
      accounts: [PRIVATE_KEY],
      gas: 'auto',
    },

    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/fQWpTJS6NYccPtDrvODYo64Be-EEA6Sf',
      chainId: 11155111,
      accounts: [PRIVATE_KEY],
    },
    base: {
      url: 'https://base-mainnet.g.alchemy.com/v2/ZVkKbby2XeAEjcRialrmXAXeuezZGP6j',
      chainId: 8453,
      accounts: [PRIVATE_KEY],
    },
  },
};
