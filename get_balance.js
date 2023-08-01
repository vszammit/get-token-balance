// Import necessary modules
const { Alchemy, Network } = require("alchemy-sdk");
require('dotenv').config();

const config = {
    apiKey: process.env.API_KEY,
    network: Network.ETH_MAINNET,
};
const alchemy = new Alchemy(config);

const main = async () => {
    //Feel free to switch this wallet address with another address
    const ownerAddress = "0x00000000219ab540356cbb839cbe05303d7705fa";

    //The below token contract address corresponds to USDT
    const tokenContractAddresses = ["0xdAC17F958D2ee523a2206206994597C13D831ec7"];

    const data = await alchemy.core.getTokenBalances(
    ownerAddress,
    tokenContractAddresses
    );

    console.log("Token balance for Address");
    console.log(data);
}; 

const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();
