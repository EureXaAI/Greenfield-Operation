const {Client}  = require('@bnb-chain/greenfield-js-sdk');

// testnet
const client = Client.create('https://gnfd-testnet-fullnode-tendermint-ap.bnbchain.org', '5600');

;(async () => {
    const latestBlockHeight = await client.basic.getLatestBlockHeight()
    
console.log('latestBlockHeight', latestBlockHeight)
})()


;(async () => {
    const balance = await client.account.getAccountBalance({
    address: '0xf8Ca5894433689c775A4CFFdFD30c63932dA25bC',
    denom: 'BNB'
})

console.log('balance: ', balance)
})()