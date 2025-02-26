const express = require("express");
const app = express();
const path = require('path')


app.set('view engine', 'ejs')
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
 

app.get("/", function (req, res) {
  res.render('index')
});

app.get("/profile/:user/:age", function(req,res){
    res.send(`welcome, ${req.params.user} of age ${req.params.age}`)
})

app.listen(3000, function () {
  console.log("its running");
});
