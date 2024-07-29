// const express = require('express');
// const app = express();
// const port = 3000;

// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });

// app.listen(port, () => {
//     console.log(`Server is running at http://localhost:${port}`);
// });

const express=require('express');
const app=express();

const bodyParser=require('body-parser');
app.use(bodyParser.json());

app.listen(3000,()=>{
    console.log("Server at port no. 3000")
})

app.get('/',(req,res)=>{
    res.send("Hello Jee,Kaise ho saare?")})

app.post('/api/cars',(req,res)=>{
    const{name,brand}=req.body;
    console.log(name);
    console.log(brand);
    res.send("Cars Submitted Successfully");

})
    








// const express = require('express');
// const app = express();

// app.use(express.json());

// app.post('/api/cars', (req, res) => {
//     // Your logic here
//     res.status(200).send({ message: 'Car added successfully' });
// });

// app.listen(3000, () => {
//     console.log('Server is running on port 3000');
// });



const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/MyDatabase',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{
    console.log("Connection Successful")
})
.catch((error)=>{
    console.log("Recieved an error")
})