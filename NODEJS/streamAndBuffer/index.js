// WHAT IS STREAM?
// Stream are objects that let us to read data from a source or write data to a destination in a continous fashion. There are four types of streams. Streaming means listening a music or video in real time instead of downloading it and watching it later.
/*********************** TYPES OF STREAM ************************/
// Readable         this is used for read operation
// Writable         this is used for write operation   
// Duplex           Stream which can be used for both read and write operation    
// Transform        A type of duplex stream where the output is computed based on input

// What is stream.pipe()
// The method is used to take a readable stream and connect it to a writable stream.

const fs = require('fs');
const http = require('http');

http.createServer((req, res) => {
    // 1ST METHOD
    // const file = fs.readFileSync('input.text');
    // res.end(file.toString())

    /* 2ND METHOD
    const streamData = fs.createReadStream('input.text');
    streamData.on("data", chunkData => {
        res.write(chunkData.toString());
    })

    streamData.on("end", () => res.end())
    streamData.on("error", error => {
        console.log(error);
        res.end('File not found')
    })
    
        THIRD METHOD WITH ONLY TWO LINES OF CODE
    */
    const streamData = fs.createReadStream('input.text');
        streamData.pipe(res)


}).listen(4000);

