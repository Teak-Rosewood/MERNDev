const fs = require('fs')

function Fwrite(path, data){
    fs.appendFile(path, data, (err) => {
        console.log("")
        console.log("File Written Successfully.")
    });
}

Fwrite('a.txt', "This is the second line of the text file")