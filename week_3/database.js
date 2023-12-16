const {Client} = require('pg')

const client = new Client({
    host: "localhost",
    user: "postgres",
    database: "week_3",
    password:"hello123",
    port:5432
})

client.on('connect', () =>{
    console.log("connection established...");
})

client.on('end', () => {
    console.log("Conenction has ended...");
}) 

client.connect()
client.query('INSERT INTO test VALUES (30)', (err, result) => {
    client.connect();
    if (err) throw err;
    console.log("query successful...");
    client.end();
})
client.query('select * from test', (err, result) => {
    client.connect();
    if (err) throw err;
    console.log(result.rows);
    client.end()
})

module.exports = client;