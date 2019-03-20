const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer();
const fs = require('fs');
const path = require('path');

let result = "";

app.use(express.static('client'))
app.use(bodyParser.text());

// app.set('view engine', 'ejs');

app.listen(port);

app.post('/upload_json', upload.single('fileJSON'), (req, res) => {
    
    let obj;
    (req.file) ? obj = JSON.parse(String(req.file.buffer)) : obj = JSON.parse(req.body.split('=')[1]);
    result = Object.keys(obj).join(',');
    
    for (let prop in obj) if (typeof obj[prop] === 'object') result = result.split(',' + prop).join('');
    
    const repeat = (nextObj) => {
        if (result.endsWith(',')) result = result.substring(0, result.length-2);
        result += '\n';
        for (let prop in nextObj) {
            if (Array.isArray(nextObj[prop])) for (let child of nextObj[prop]) repeat(child);
            else result += nextObj[prop].toString() + ',';
        }
    }
    repeat(obj);

    if (result.endsWith(',')) result = result.substring(0, result.length-2);

    if (result !== '') fs.writeFile('client/jsonTo.csv', result, (err) => {
        if (err) throw err;
    })

    res.send(result);
});

app.get('/download', (req, res) => {
    let file = path.join(__dirname, "client/jsonTo.csv");
    res.download(file);
});
