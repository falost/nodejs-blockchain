module.exports = {
  title: 'Node.js区块链开发2',
  description: '《Node.js区块链开发2》',
  base: '/nodejs-blockchain/',
  dest: './docs/',
  configureWebpack: {
    resolve: {
      alias: {
        '@alias': '/book/assets/'
      }
    }
  }
}