var express     = require('express'),
    path        = require('path'),
    APP_DIR     = path.join(__dirname, '/dist'),
    app         = express(),
    request     = require('request');


app.use(express.static(APP_DIR));

app.get('/convert', (req, res) => {
    res.send('Hello World!');
    console.log(req);
    console.log("------------" + new Date() + "-----GET--------\n");
})

app.post('/convert', (req, res) => {
    res.json(
        {
            "speech": "hello world",
            "displayText": "hello world",
            "data": {},
            "contextOut": [],
            "source": "hello world"
        }
    );
    console.log(req);
    console.log("------------" + new Date() + "-----POST-------\n");
})

// test an endpoint
// app.get('/test', (req, res) => {
//     request('http://localhost:3000/convert', { json: true }, (err, res, body) => {
//         if (err) { return console.log(err); }
//         res.send("hit /test")
//     }); 
// })


app.listen(3000, () => {
    console.log('App is listening on port 3000.')
})
