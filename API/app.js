// Import express
import http from 'http';
import express from './services/express';
import config from './config';
import apiRoutes from './src/api-routes';

// Import Mongoose
const mongoose = require('mongoose');

// Initialize the app
const app = express(apiRoutes);
const server = http.createServer(app);

const port = config.port;
const mongoUri = config.mongo.uri;

// Connect to Mongoose and set connection variable
mongoose.connect(mongoUri, { useNewUrlParser: true });

// Send message for default URL
app.get('/', (req, res) =>
  res.send(`Node with Express is running on port ${port}`)
);

// Launch app to listen to specified port
server.listen(port, function() {
  console.log('Running api on port ' + port);
});
