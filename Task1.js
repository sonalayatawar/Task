const express = require('express');
const app = express();


app.get('/',(req,res)=>{

    res.send("Hello World!");
})

app.post('/',(req,res)=>{

    res.send("Hello World!");
})

app.put('/',(req,res)=>{

    res.send("Hello World!");
})

app.patch('/',(req,res)=>{
    res.send("Hello World!");
})

app.delete('/',(req,res)=>{
    res.send("Hello World!");
})

app.listen(3000,()=>{
    console.log("I am listening on 3000");
})