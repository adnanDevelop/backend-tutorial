const fs = require('fs');
const content = 'we passed them a callback function and its get called when that task completes the callback has an orgument that tells whether the task is completed successfully or not'


// fs.writeFile("async.text", content, () => console.log("file is completed"))
fs.readFile('async.text' , (err , res) => console.log(res.toString()))