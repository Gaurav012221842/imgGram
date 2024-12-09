import express from 'express';
import connectDB from './config/dbConfig.js';
const app=express();
app.get('/',(req,res) => {
    res.send('Hello, World!');
});
app.get('/ping',(req,res) => {
    res.json({messagee: 'Hello, World with json response'});}
);
app.post('/ping',(req,res) => {
    res.json({message: 'Hello, World with json response from POST request'});
});
app.put('/ping',(req,res) => {
    res.json({message: 'Hello, World with json response from PUT request'});
});
app.delete('/ping',(req,res) => {
    res.json({message: 'Hello, World with json response from DELETE request'});
});
app.listen(3000, () =>{ console.log('Server running on port 3000')
        connectDB();
});