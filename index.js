const { PeerServer } = require('peer')

const PORT = 9002

const peerServer = PeerServer({
  port: PORT,
  key: 'demodemo',
  path: '/myapp',
  allow_discovery: true,
})

peerServer.on('connection', (client) => {
  console.log('connection', client.id)
})

peerServer.on('disconnect', (client) => {
  console.log('disconnect', client.id)
})

console.log(`Peer server is running on port ${PORT}`)
