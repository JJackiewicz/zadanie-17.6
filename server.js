var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views', './views');
app.use(express.static('assets'));

app.get('/', (req, res) => {
    res.render('index', {
       name:"Sign in" 
    })
});
app.get('/auth/google', (req, res) => {
    res.render('logged',{
        name:"Logged" 
     })
});

app.listen(3000);
app.use(function (req, res, next) {
    res.status(404).send('Error!')
});