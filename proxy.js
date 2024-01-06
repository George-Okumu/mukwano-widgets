const cors_anywhere = require('cors-anywhere');

const host = '0.0.0.0';
const port = 5050;

cors_anywhere.createServer({
  originWhitelist: [], // Allow all origins
}).listen(port, host, function () {
  console.log('CORS Anywhere server is running on ' + host + ':' + port);
});

