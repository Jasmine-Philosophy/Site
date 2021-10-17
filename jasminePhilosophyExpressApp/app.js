// Basic proof of concept working as of 17/10/2021
// Jasmine-Ball

const http = require('http');
const mysql = require('mysql');
const port = process.env.PORT || 3000;
const con = mysql.createConnection({
    host: 'server244.web-hosting.com',
    user: 'jasmxfvl_db_web',
    password: 'bl@ck100', // Will set this up properly
    database: 'jasmxfvl_analytics'
});

function last(displ) {
    const handler = (req, res) => {
res.end("Welcome. this is our latest topic: " + displ);
};
const server = http.createServer(handler);
server.listen(port, err => {
if (err) {
    console.error(err);
}
else {
    console.error(`Server listening on port ${port}`);
}

});  
    
};

function qy() {
con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT Body FROM articles WHERE Body LIKE 'St%' LIMIT 1", function (err, result, fields)
{
    if (err) throw err;
    const displ = result[0].Body;
    last(displ);
    });
});
};

qy();