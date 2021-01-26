//importing the modules
import express from 'express'
import mongoose from 'mongoose'

const app = express();
const port = process.env.PORT || 9000;

//body parser
app.use(express.json())

//data

const coustumers = [
    {name:"Rakesh Sripelly" , id:1},
    {name:"RAMESH Sripelly" , id:2},
    {name:"JUNNU Sripelly" , id:3},
]

//Get method
app.get('/',(req,res) =>{
    res.send('welcome to the REST api')
})

app.get('/api/coustumers',(req,res) =>{
   res.send(coustumers)
})

app.get('/api/coustumers/:id',(req,res) =>{
    const coustumer = coustumers.find( c => c.id === parseInt(req.params.id));
    if(!coustumer){
        res.send('coustemer not found')
    }
    else{
        res.send(coustumer)
    }
})

//post methods

app.post('/api/coustumers',(req,res) =>{
    const coustumer = {
        id:coustumers.length + 1,
        name : req.body.name
    }
    coustumers.push(coustumer)
    res.send(coustumer)
})

//put methods

app.put('/api/coustumers/:id',(req,res) =>{
    const coustumer = coustumers.find( c => c.id === parseInt(req.params.id))
    if(!coustumer){
        res.send('there is no coustmer found')
    }
    else{
        coustumer.name = req.body.name;
        res.send(coustumer)
    }
})

//delte

app.delete('/api/coustumers/:id' ,(req,res) =>{
    const coustumer = coustumers.find( c => c.id === parseInt(req.params.id))
    if(!coustumer){
        res.send('there is no coustmer found')
    }else{
        const index = coustumers.indexOf(coustumer)
        coustumers.splice(index,1)
        res.send(coustumer)
    }

})


//listener
app.listen(port,(req,res) => {console.log(`server conneted to ${port}`)})