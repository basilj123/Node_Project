const express = require('express');

const app = express();

app.get('/',(req,res) => {
    return res.send('<h1> This is My Home Page </h1>')
});

app.get('/about',(req,res) => {
    return res.send(`<h1> Hi,Iam ${req.query.name} ang age is: ${req.query.age} </h1>`);
});

app.get('/contact',(req,res) => {
    return res.send('<h1> This is Contact Page: 88484***** </h1>')
});

app.use((req,res) =>{
    res.status(404).send('<h1> 404 Not Found </h1>')
})

const PORT = process.env.PORT || 8002;

app.listen(PORT,() => console.log('Server Running'));