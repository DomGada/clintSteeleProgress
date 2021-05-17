const express = require("express")
const app = express()
// app.use((req, res) => {
//     console.log("We got a new req!")
//     res.send(
//         '<h1>This is my webpage</h1>'
//     )
// })

app.get('/', (req, res) => {
    res.send("This is the home page.")
})
app.get('/r/:subreddit', (req, res) => {
    const {
        subreddit
    } = req.params;
    res.send(`<h1>You are Browsing the ${subreddit} subreddit.</h1>`)
})
app.get('/r/:subreddit/:postid', (req, res) => {
    const {
        subreddit,
        postid
    } = req.params;
    res.send(`<h1>Viewing postid ${postid} on the ${subreddit} subreddit.</h1>`)
})

app.post('/cats', (req, res) => {
    res.send("POST REQ On CATS!!!")
})
app.get('/cats', (req, res) => {
    res.send("meow")
})

app.get('/dogs', (req, res) => {
    res.send("woof")
})
app.get('/search', (req, res) => {
    const {
        q
    } = req.query;
    if (!q) {
        res.send("NOTHIN FOUND IF NOTHING SEARCHED")
    }
    res.send(`<h1>Search results for: ${q}</h1>`)
})
app.get('*', (req, res) => {
    res.send(`I don't know that path!`)
})

// /cats => 'meow
// /dogs => 'woof'
// '/'




app.listen(8080, () => {
    console.log("Listening in on port 8080!");
})