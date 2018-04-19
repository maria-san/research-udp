const datagram = require('dgram');
const PORT = 3333;
const HOST = '127.0.0.1';

const param = process.argv[2];

const client = datagram.createSocket('udp4');
const message = Buffer.from(param);

client.send(message, 0, message.length, PORT, HOST, (err) => {
    if (err) throw err;

    console.log('UDP message sent');
    client.close();
})