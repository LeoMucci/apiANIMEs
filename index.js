const express = require("express")
const app = express()
const port = process.env.PORT || 3000

const animes = require("./scr/animes/animes.json")

app.get("/animes", (req,res) => {
    return res.json(animes)
})

app.listen(port, () => {
    console.log("servidor esta rodando")
})