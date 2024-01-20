const fs = require("fs");
fs.readFile("a.txt", "UTF-8", function(err, data){
    console.log(data);
})