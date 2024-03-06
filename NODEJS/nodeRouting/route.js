const http = require('http');
const fs = require('fs');
const port = 4000;

http.createServer((req, res) => {
    const result = fs.readFileSync(`${__dirname}/api.js`, "utf-8")
    if (req.url === '/about') {
        res.end(result)
    } else {
        console.log('Error occured');
    }

}).listen(port, () => console.log(`Server is running at port no: ${port}`))

