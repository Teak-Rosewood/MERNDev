const fs = require('fs')

function cleanFile(path){
 fs.readFile(path, "utf-8", function(err, data){
    data = data.replace(/\s+/g,' ').trim();
    console.log(data);
    fs.writeFile(path, data, (err) => {
        console.log("File successfully cleaned.")
    });
 })
}

function rewrite(path, data){
    fs.writeFile(path, data, (err) => {
        console.log("File has been rewritten...")
    });
}
cleanFile("a.txt");
setTimeout(() => {rewrite("a.txt", "hello     world    my    name   is       raman")}, 3000);
