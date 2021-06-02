const express = require(`express`);
const app = express();
const port = 3000;

app.get(`/`, (req, res) => {
    res.send(`Welcome to Gitpub!`)
})


app.listen(3000, () => {
    console.log(`Listening to port:${port}`)
})