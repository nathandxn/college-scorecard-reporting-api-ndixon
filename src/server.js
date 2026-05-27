import http from 'http';
import app from './app.js';

const port = process.env.PORT || 3000;

// express application qualifies as a request handler
const server = http.createServer(app);

server.listen(port);
