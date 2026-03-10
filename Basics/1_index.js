require("dotenv").config(); // to use .env file // load variables from .env file
console.log("Tarun Sharma")


const express = require('express') //  we have used "require" means we require Express. We can also use another syntex
const app = express()
const port = 3000

app.get('/', (req, res) => { // get is a request . here made on the home page
  res.send('Hello World!')
})
 9
app.get('/twitter',(req,res) =>{
    res.send('twitter is opened')
})
app.get ('/login', (req,res) =>{
    res.send('<h1>please consult Mr.Tarun for all your problems</h1> ')
})

app.get ('/tarun', (req,res) =>{
    res.send('<h2>Your one stop solution for all your utilities and accomodation needs </h2> ')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.listen(process.env.PORT, () => {
  console.log(`Hello love you ${port}`) // It is still getting the value of port from the same file only i.e 3000
})
// Use this if you want to imoprt the value of port from the .env file

// const port = process.env.PORT
// app.listen(port, () => {
//   console.log(`Hello love you ${port}`) 
// })

// now this is completely ready for the deployment
// hello