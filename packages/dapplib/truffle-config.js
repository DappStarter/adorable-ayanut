require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture casino symptom security chat crater remain connect gesture inhale fringe gentle'; 
let testAccounts = [
"0x900551892749fb94a1f8ce6680b245cc95f87e9e3e9abc37deec02f1217a578a",
"0x5966e10a91d0c7cadb02e5309c4e9058eaaaededdc38124955957fee3cdaeb52",
"0xce55e40f27354170cf0ba8025a84fcf2830c53a967d4b3106165eed66d595b72",
"0x0090f0fde00606fe2e1b75cea13ce1aab7cef3db8e498333f78b61bdd2d0cd97",
"0x2a20c007f6b5afb739c8d6229b5dc6d751e396eb6362b176089ba4acda2d8c57",
"0x2234c4d73fccae2b7793be11c84a45b84988f1396ef3640ae0916d5ad6cf818d",
"0x98054f4a9991ef47ebe7bdada1ae8d19f7e7813aa981ebcf14b1817367cb5e1b",
"0xb897abd9552a5bd8443e4f0a87debf145b41ad8ff67db6a1960bf25bd726fdfd",
"0x8d30cabf1edd971b4449319309df0309728603b94ea4ef73f5cfa96cbcef2d83",
"0x7bc8a5762e6352b253713f4215b5e87a4ddf4057e51836b0d92651ec87395b17"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
