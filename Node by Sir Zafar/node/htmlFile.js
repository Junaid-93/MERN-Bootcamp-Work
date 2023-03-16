const http = require('node:http');
const fs = require('node:fs').promises;
const port = 5000;


const requestListener = function (req, res) {
  fs.readFile(__dirname + "/index.html")
      .then(contents => {
          res.setHeader("Content-Type", "text/html");
          res.writeHead(200);
          res.end(contents);
      })
      .catch(e => {
          res.setHeader("Content-Type", "text/plain");
          res.writeHead(500);
          res.end(`Oops! ${e.message}`);
      })
};


const server = http.createServer(requestListener);
server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});