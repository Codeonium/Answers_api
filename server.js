const jsonServer = required('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middleware = jsonServer.default();
const port = process.env.PORT || 3000;

server.use(middleware);
server.use(router);

server.listen(port);