const express = require('express');
const app = express();
const path = require('path')
const projectrouter = require('./Routes/project')
const mongoose = require('mongoose')

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded());
app.use('/start', projectrouter.router);


app.listen(5000);
mongoose.connect('mongodb+srv://Om:4qfYKODHiNsNwqZF@cluster1.m5sa1bn.mongodb.net/MyProject?retryWrites=true&w=majority').then(() => console.log("database connected"))

// 4qfYKODHiNsNwqZF