// http method           :   module can create http server that listen to server ports and  gives a response back to the client.
// createServer()        :   includes request and response  parameters which is supplied by node.js. 
// request parameter     :   object can be used to get information about the current http requeest like. url , request , header and data
// response parameter    :   response object can be used to sent a response for a current http request.
// If the response from the HTTP server is supposed to be displayed as HTML, you should include an HTTP header with the correct

const http = require('http');
const port = 4000;

http.createServer((req, res) => {
    res.write('server is working')
}).listen(port, () => console.log(`Server is running at port no: ${port}`))

