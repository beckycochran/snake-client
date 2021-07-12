const net = require("net");
const { host, PORT } = require("./constants");


// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({ host, PORT });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on('data', (data) => {
    console.log('Message from client: ', data)
  });
  conn.on('connect', () => {
    conn.write('Name: SNK');
  });
  //conn.on('connect', () => {
    //conn.write('Move: up');
  //});

  return conn;
};

const handleUserInput = function() {
  //code to handle user input
};


// setup interface to handle user input from stdin



const setupInput = function () {
  stdin.on("data", handleUserInput);
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};



module.exports = {
  net,
  connect,
  setupInput
};