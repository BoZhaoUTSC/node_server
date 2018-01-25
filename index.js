var express     = require('express'),
    path        = require('path'),
    APP_DIR     = path.join(__dirname, '/dist'),
    app         = express();


app.use(express.static(APP_DIR));

app.get('/convert', (req, res) => {
    res.send('Hello World!');
    console.log(req);
})

app.listen(3000, () => {
    console.log('App is listening on port 3000.')
})
