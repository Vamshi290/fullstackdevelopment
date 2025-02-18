const http = require('http');
const server = http.createServer((req, res) => {
  switch (req.url) {
    case '/home':
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Welcome to Home');
      break;

    case '/about':
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end('About Us');
      break;

    case '/contact':
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Contact Us');
      break;

    default:
      res.statusCode = 404;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Route not found');
      break;
  }
});

server.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
});
