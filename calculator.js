const express = require('express');
const bodyParser = require("body-parser");

const app = express();

/*
app.get("/", (request, response) => {
    console.log(request);
    response.send("Hello world1")
})
*/
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get("/", (req, res) => {
    //res.send('test')
    res.sendFile(__dirname + "/index.html");
})

app.post("/", (req, res) => {
    console.log(req.body.num1);
    console.log(req.body.num2);
    
    const n1 = parseInt(req.body.num1)
    const n2 = parseInt(req.body.num2)
    const result = n1 + n2

    res.send(`result is ${result}`)
})

const PORT = 3000

app.listen(PORT, (req, res) => {
    console.log(`server running on port ${PORT}`)
    console.log('http://localhost:3000')
});