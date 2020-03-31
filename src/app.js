
const express = require('express');
const app = express();

const port = process.env.PORT || 3000;


app.get ('', (req, res) => {
    res.send('CTRL copy website coming soon')
});


// This has to come last
app.get('*', (req, res) => {
    res.send('page not found')
})

app.listen(port, () => {
    console.log('server is up in port' + port)
});