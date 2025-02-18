const http = require('http');

const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    if (req.url === '/home') {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Welcome to home');
    } else {
      res.statusCode = 404;
      res.setHeader('Content-Type', 'text/plain');
      res.end('error not found');
    }
  } else{
    res.statusCode = 500;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Internal server error');
  }
});

// Server listens on port 3000
server.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
});
