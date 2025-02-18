const http = require('http');
const url = require('url'); 
const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  if (parsedUrl.pathname === '/greet' && req.method === 'GET') {
    const name = parsedUrl.query.name;
    if (name) {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end(`Hello, ${name}!`);
    } else {
      res.statusCode = 400;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Please provide a name query parameter (e.g., ?name=John).');
    }
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Route not found');
  }
});

server.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
});
