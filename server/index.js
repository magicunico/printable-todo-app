const express = require('express');
const bodyParser = require('body-parser');
const pdf = require('html-pdf');
const cors = require('cors');

const halloweenPdfTemplate = require('./documents')
const christmasPdfTemplate = require('./christmas')
const darkPdfTemplate = require('./dark')
const darkPdfTemplate = require('./light')

const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//POST generate PDF

app.post('/create-halloween-pdf',(req,res)=>{
    pdf.create(halloweenPdfTemplate(req.body),{}).toFile('haloweenPdf.pdf',(err)=>{
        if(err){
            res.send(Promise.reject());
        }
        res.send(Promise.resolve());
    });  
})


app.post('/create-christmas-pdf',(req,res)=>{
    pdf.create(christmasPdfTemplate(req.body),{}).toFile('christmasPdf.pdf',(err)=>{
        if(err){
            res.send(Promise.reject());
        }
        res.send(Promise.resolve());
    });  
})

app.post('/create-light-pdf',(req,res)=>{
    pdf.create(lightPdfTemplate(req.body),{}).toFile('lightPdf.pdf',(err)=>{
        if(err){
            res.send(Promise.reject());
        }
        res.send(Promise.resolve());
    });  
})

app.post('/create-dark-pdf',(req,res)=>{
    pdf.create(darkPdfTemplate(req.body),{}).toFile('darkPdf.pdf',(err)=>{
        if(err){
            res.send(Promise.reject());
        }
        res.send(Promise.resolve());
    });  
})


//GET send pdf 
app.get('/fetch-halloween-pdf',(req,res)=>{
    res.sendFile(`${__dirname}/haloweenPdf.pdf`)
})

app.get('/fetch-christmas-pdf',(req,res)=>{
    res.sendFile(`${__dirname}/christmasPdf.pdf`)
})

app.get('/fetch-light-pdf',(req,res)=>{
    res.sendFile(`${__dirname}/lightPdf.pdf`)
})

app.get('/fetch-dark-pdf',(req,res)=>{
    res.sendFile(`${__dirname}/darkPdf.pdf`)
})


app.listen(port, ()=>console.log(`Listening on port ${task10}`));

