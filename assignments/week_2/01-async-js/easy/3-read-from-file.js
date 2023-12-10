const fs = require('fs')
function readFile(path){
    fs.readFile(path, "utf-8", function(err, data){
        console.log(data); 
    })

}

readFile('a.txt')