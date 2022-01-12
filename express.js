const express = require('express');

const app = express();

const port = 3000;

app.get('/',(req,res)=>{

    res.type('text/HTML');
    res.send('WELCOME!');
    
});
app.get('/about',(req,res)=>{
    res.type('text/HTML');
    res.send('ABOUT PAGE!');
})

app.listen(port,()=>{console.log('server is working!')});