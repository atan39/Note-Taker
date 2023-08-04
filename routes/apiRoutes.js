const express = require('express');
const app = express();
const { readFromFile, readAndAppend } = require('../utils/fsUtils.js');
const uuid = require('../utils/uuid.js');

app.get ('/notes', (req, res) => {
    readFromFile('./db/db.json')
    .then(data => {
        console.log(data)
        res.json(JSON.parse(data))
    })
});

app.post('/notes', (req, res) => {
    console.log(req.body) 
    const newNote = {
       title:req.body.title, 
       text:req.body.text,
       id:uuid(),
    };
    readAndAppend(newNote, './db/db.json')
    .then((data) => {
        res.json(data)
    });


    
});
module.exports = app;
