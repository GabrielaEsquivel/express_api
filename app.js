// Usando objeto express
const express = require('express')
// App de Express
const app = express()
app.use(express.json()) // Indicamos que usaremos JSON
// Puerto en que vamos a ver nuestra app: localhost:3000
const port = 3100

// Con esto inicializamos esta app
app.listen(port, () => {
 console.log(`Example app listening on port ${port}`)
})

// routes

//HTTP Methods
app.get('/v1/explorers', (req, res) => {
    res.send(`GET METHOD IMPLEMENTED, Explorers V1 API  ${new Date()}`)
    const explorer = { id: 1, name: "Explorer 1"}; 
    const explorer2 = { id: 2, name: "Explorer 2"}; 
    const explorer3 = { id: 3, name: "Explorer 3"}; 
    const explorers= [explorer, explorer2, explorer3]
    // HTTP STATUS: 200 successful 
    res.status(200).json(explorers)

})

app.get('/v1/explorers/:id', (req, res) => {
    res.send(`GET METHOD IMPLEMENTED, Explorers V1 API  ${new Date()}`)
    const explorer = { id: 1, name: "Explorer 1"}; 

    // HTTP STATUS: 200 successful 
    res.status(200).json(explorer)

})

app.post('/v1/explorers', (req, res) => {
    res.send(`POST METHOD IMPLEMENTED, Explorers V1 API  ${new Date()}`)
    const explorer = { id: 1, name: "Explorer 1"}; 
    // Agregar la lógica para persistir
    // HTTP STATUS: 200 successful 
    res.status(200).json(explorer)

})