## Overview
This repository contains a JavaScript script that utilizes Alchemy's SDK to fetch the balance of a specific token owned by an address on Ethereum or Polygon with a single API request. The balance of the token is calculated using Alchemy's [getTokenBalances](https://alchemyenterprisegroup.readme.io/alchemy-docs/reference/alchemy-gettokenbalances) endpoint.

## Steps to Run

Before running the script, ensure that you have [Node.js](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm), [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm), and [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable) installed on your system. 

Follow these steps to run the script:

1. Clone this repository to your local machine:
`git clone https://github.com/vszammit/get-token-balance.git`


2. Navigate to the project folder: `cd get-token-balance`


3. Open the `sample.env` file and update the value for the API Key to your own value and rename file to `.env`. If you don't have an Alchemy API Key yet you can [create one for free here](https://alchemy.com/?a=starter-code).

4. Open `getBalance.js` and update the value of the Wallet Address found within the main function on line 13 and the token contract address on line 16 to reflect the wallet and token in USDT that you will be querying. 


5. Install the Alchemy SDK and the `dotenv` package running either of the following commands:
    - `yarn add alchemy-sdk dotenv`
    - `npm i alchemy-sdk dotenv`


6. Run the script in the terminal: `node getBalance.js`


By following these steps, the script will execute and fetch the balance of a specific token owned by an address on Ethereum or Polygon.
