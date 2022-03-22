require('env2')('.env');

const { join } = require('path');
const express = require('express');
const compression = require('compression');
const cookieParser = require('cookie-parser');

const app = express();
const router = require('./routes');

app.set('port', process.env.PORT || 5000);
app.disable('x-powered-by');
app.use(compression());
app.use(cookieParser());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

app.use('/api/v1', router);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(join(__dirname, '..', '..', 'client', 'build')));
  app.all('*', (req, res) => res.sendFile(join(__dirname, '..', '..', 'client', 'build', 'index.html')));
}

module.exports = app;
