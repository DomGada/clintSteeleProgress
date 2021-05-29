const express = require('express');
const app = express();
app.use(express.urlencoded({
    extended: true
})); // this one only works with form data!
app.use(express.json({
    extended: true
})); // this one parses json
app.get('/tacos', (req, res) => {
    res.send("GET /tacos response")
})

app.post('/tacos', (req, res) => {
    const {
        meat,
        qty
    } = req.body
    res.send(`OK, here are your ${qty} ${meat} Tacos`)
})
// req.body contains all of the post request data 
app.listen(3000, () => {
    console.log("ON PORT 3000")
})