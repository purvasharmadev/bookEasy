import http from 'http';

const port = process.env.PORT || 4000;

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end(JSON.stringify({ message: 'Backend (TS) placeholder running' }));
});

server.listen(port, () => console.log(`Backend listening on ${port}`));
