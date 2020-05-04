const server = require('./app');

const port = 8080;

server.listen(port, () =>
  console.log(`Use localhost:${port} on the browser to check the server`)
);
