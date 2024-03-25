const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>');
});

app.get('/about', (req, res) => {
    res.send('<h1>About us</h1>');
});

app.get('/contact', (req, res) => {
    res.sendFile('views/contacts.html', {root: __dirname })
});

app.post('/contact', (req, res) => {
    fs.appendFileSync("messages.txt", "\r\n" + JSON.stringify(req.body));
    
    res.redirect('/contact');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});