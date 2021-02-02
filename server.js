//importing the modules
import express from 'express'

const app = express();
const port = process.env.PORT || 3000;

//body parser
app.use(express.json())

//data

const clients = [
    {name:"Rakesh Sripelly" ,email:'' ,id:1},
]

//Get method
app.get('/',(req,res) =>{
    res.send('welcome')
    console.log(clients)
})

app.get('/api/clients',(req,res) =>{
   res.send(clients)
})

app.get('/api/clients/:id',(req,res) =>{
    const client = clients.find( c => c.id === parseInt(req.params.id));
    if(!client){
        res.send('client not found')
    }
    else{
        res.send(client)
    }
})

//post methods

app.post('/api/clients',(req,res) =>{
    const client = {
        id:coustumers.length + 1,
        name : req.body.name
    }
    clients.push(client)
    res.send(coustumer)
})

//put methods

app.put('/api/clients/:id',(req,res) =>{
    const client = clients.find( c => c.id === parseInt(req.params.id))
    if(!clients){
        res.send('there is no client found')
    }
    else{
        client.name = req.body.name;
        res.send(client)
    }
})

//delte

app.delete('/api/clients/:id' ,(req,res) =>{
    const client = clients.find( c => c.id === parseInt(req.params.id))
    if(!client){
        res.send('there is no client found')
    }else{
        const index = clients.indexOf(client)
        client.splice(index,1)
        res.send(client)
    }

})


//listener
app.listen(port,(req,res) => {console.log(`server conneted to ${port}`)})