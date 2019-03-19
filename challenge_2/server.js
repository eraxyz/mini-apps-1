const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
let result = "";

app.use(express.static('client'))
app.use(bodyParser.text());

app.set('view engine', 'ejs');

app.listen(port);

app.post('/upload_json', function (req, res) {
    let obj = JSON.parse(req.body.split('=')[1]);
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
    console.log(result);
    res.send(result);
});
