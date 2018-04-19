const datagram = require('dgram');
const PORT = 3333;
const HOST = '127.0.0.1';

const server = datagram.createSocket('udp4');

server.on('listening', () => {
    console.log('UDP Server listening');
})

server.on('message', (msg, rinfo) => {
    console.log(`${rinfo.address}:${rinfo.port} - ${msg}`);
})

server.bind(PORT, HOST);