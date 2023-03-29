const express = require('express');
const cors = require('cors');

// twilio requrements -- Texting API
const accountSid = '----YOUR ---ACCOUNT---STD';
const authToken = '---YOUR---AUTHETICATION---TOKEN';
const client = (accountSid, authToken);

const app = express(); //allias

app.use(cors()); //blocks the browser from rescrticing any data

// welcome Page for the Server
app.get('/',   (req, res)=>{
    res.send('Welcome to the Express Server')
})
//Twilio Text
app.get('/send-text',   (req, res)=>{
  //GET Variablies, passed via query string 
  const { recipient, textmessage } = req.query

  //Send Text
  client.messages.create({
    body: textmessage,
    to: recipient,
    from: '+15074734314' //From Twilio
  }).then((message) =>][console.log(message.body))]
})

// most have nodemon installed,http://localhost:4000
app.listen(4000,() => console.log("Running on Port 4000"));
