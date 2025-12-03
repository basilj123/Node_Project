const express = require('express');
const fs = require('fs')
const fsPromises = require('fs').promises;
// const users1 = require('./Mock_data.json')
const app = express();
const PORT = process.env.PORT || 8000

//Middleware - Plugin
app.use(express.urlencoded({extended: false}));


//Get all users Details
app.get('/api/users',async (req,res) =>{
    try{
        const data = await fsPromises.readFile('./Mock_data.json','utf8');
        const users = JSON.parse(data)
        res.json(users);
    }catch(err){
        res.status(500).send('<h1> Error Reading Users </h1>')
    }   
})


//Get User with ID
app.get('/api/users/:id',async (req,res) =>{
    try{
        const id = Number(req.params.id);
        const data = await fsPromises.readFile('./Mock_data.json','utf8');
        const users = JSON.parse(data)
        const userId = users.find(user => (user.id === id));
        if(userId){
            res.json(userId)
        }else{
            res.status(404).send(`<h1> No user with ID:${req.params.id} </h1>`)
        }
    }catch(err){
        res.status(500).send(`<h1> Error While Reading Users </h1>`)
    }  
});


app.post('/api/users',async (req,res) =>{
      const data = await fsPromises.readFile('./Mock_data.json','utf8');
      const users = JSON.parse(data)
      const body = req.body;
    //   console.log(req.body);
      const newId = users.length > 0 ? users[users.length-1].id+1 : 1;
      const newUser = {id: newId,...body}
      console.log(newUser);
      users.push(newUser);
      fs.writeFile('./Mock_data.json',JSON.stringify(users),(err,data) =>{
        res.send({status: "pending"});
      })
});

app.listen(PORT,() => console.log(`Server Running on PORT:${PORT}`));