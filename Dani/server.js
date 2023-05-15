const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    // Implementarea tratării cererilor aici
  });

  
  if (req.method === 'GET' && req.url === '/') {
    const filePath = path.join(__dirname, 'index.html');
    
    fs.readFile(filePath, (err, content) => {
      if (err) {
        res.writeHead(500);
        res.end('Internal Server Error');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(content);
      }
    });
  }
  server.listen(3000, () => {
    console.log('Serverul este pornit și ascultă pe portul 3000');
  });
    