const express = require('express');
const app = express();

const userModel = require('./usermodel');

app.get('/', (req, res) =>{
    res.send('Hello')
})

app.get('/create', async (req, res) =>{
    let createduser = await userModel.create({
        name: "tonoy",
        email: "tonoy@yahoo.com",
        username: "tonoy"
    })

    res.send(createduser)
})


app.listen(3000);