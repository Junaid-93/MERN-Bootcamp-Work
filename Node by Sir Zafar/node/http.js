const http = require('node:http');
const port = 5000;

const requestListener = function (req, res) {
    res.writeHead(200);
    res.end("My first server!");
};


const server = http.createServer(requestListener);
server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});