import express from 'express';
import dotenv from 'dotenv';
import connection from './database/db.js';
import router from './API/api.js';
import bodyParser from 'body-parser';
import cors from 'cors';
import path  from 'path';
dotenv.config()

const PORT=4000;
const app=express();

app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());
app.use('/api',router);

const port  = process.env.PORT|| 4000; 
connection();

app.listen(port, ()=>console.log(`says Hello ${port}`));

if ( process.env.NODE_ENV == "production"){
    app.use(express.static("client/build"));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}