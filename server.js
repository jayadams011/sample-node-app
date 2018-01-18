'use strict'

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

//need this to serve any static files in a /public direcrtory
app.use(express.static('./public'));

app.get('/api/codefellows', (req, res) => {
    res.json({ company: 'codefellows', courses:[201, 301, 401]});
});

app.get('/api/codefellows/301', (req, res)=>{
    res.json({
        name: 301,
        students: ['brian', 'sam', 'eric'],
         timestamp: new Date()
    });

});

app.listen(PORT, () => {
    console.log('currently listening on PORT:', PORT);
});

