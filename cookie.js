const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();

app.use(cookieParser());

app.get('/', function (req,res){
    res.cookie('name', 'tonoy');
    res.send('done');
})