require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half argue bright venture stone decrease noble hospital guess force flat giant'; 
let testAccounts = [
"0x279ff02a5e806afed650ac03e129ed29585eae8ba3745ce7d4d02a92878d0631",
"0xf92e9978aaaf80778814babe9c1adf5cf9039235f07a0f7eab1ea2283e296192",
"0xc4f63cd24d7085efb466baf8b84b2f2d0f6caa08a6187ef1aeb6ba68c86a6076",
"0x41778627553b470c7dbc208dcd15b2784a41026612af6b2cc27677560c0399d0",
"0xd48005203bacb3c9abd4f9fd157fe56023e93dba7d1ec920a2e1976df878d86f",
"0xee2f6e7a24cf6e1b88acd815585cfcbf4b156309c947804bed8b1ca3620ee402",
"0xca07b9117e3d8d8eb78d1d918d56ded73ac4efadbddff7eb800c94e964fae18c",
"0x9486d97b8d5029995194dba0bc8f371779a688926743fd66c0eab0637bfe8ed6",
"0xf86afb1c0a63621d3bd547409702ab19a164a07fddda9352716f2f82b62b17bc",
"0xf69027887cad50568bd97f8ae55cdc34e74e7d432174aabe9b5c12e5505da188"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


