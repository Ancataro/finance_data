const jsonServer = require("json-server"); // IMPORTING JSON-SERVER LIBRARY
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8000;

server.use(middlewares);
server.use(router);

server.listen(port);
