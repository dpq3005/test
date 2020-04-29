const Hapi = require('@hapi/hapi');
const dotenv = require('dotenv');
const connectDB = require('./db');
const routes = require('./controller/route/index');

const PORT = process.env.PORT || 5000;

dotenv.config({ path: '../config/config.env' });

const server = Hapi.server({
  port: PORT,
  host: 'localhost',
  routers: {
    cors: true
  }

});
server.state('token', {
  ttl: process.env.JWT_COOKIE_EXPIRE,
  isSecure: true,
  isHttpOnly: true,
  encoding: 'base64json',
  clearInvalid: true,
  strictHeader: true
});
server.route(routes);

const init = async () => {
  await server.start();
  console.info('INFO: Server running on %s/documentation', server.info.uri);
  connectDB();
};






// Handle unhandled promise rejection
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error:${err.message}`);
  //Close server & exit process
  process.exit();
});

init();






