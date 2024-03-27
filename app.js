const express = require('express')
const app = express()
const router = require("./routes/router")

app.use(express.urlencoded({extended: false}))
app.use(express.json());
app.use(router);

app.listen(8080, (req, res) => {
    console.log("App Rodando na porta 8080")
})