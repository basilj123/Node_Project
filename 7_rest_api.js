const express = require('express');
const users = require('./MOCK_DATA.json');
const app = express();
const PORT = process.env.PORT || 8005;

//Route
//HTML
app.get('/users',(req,res) => {
    const html = users.map(user=> `<li> ${user.first_name} </li>`).join("");
    res.send(html)
});

//REST API
//JSON
app.get('/api/users',(req,res) =>{
    return res.json(users);
});

app.route('/api/users/:id').get((req,res) =>{
    const id = Number(req.params.id);
    const user = users.find(user => (user.id === id))
    if(user){
        res.send(user);
    }else {
        res.status(404).send('404 Not Found');
    }
})
.patch((req,res) =>{
    //Edit the user with ID
    res.json({status: "pending"});
})
.delete((req,res) =>{
    //Delete the user with ID
    res.json({status: "pending"});
});

app.post('/api/users',(req,res) =>{
    const body = req.body;
    console.log("Body",body);
    res.json({status: "pending"});
})

app.listen(PORT,() => console.log(`Server Running on PORT: ${PORT}`));