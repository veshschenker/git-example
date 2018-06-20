const express = require('express');
const app = express();

app.listen(3000,()=>{
    console.log('listening at port 3000');
})

app.get('/',(req,res)=>{
    res.status(200).send('this is a git sample');
})