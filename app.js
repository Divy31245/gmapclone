const express = require("express");
const app = express();
const port = 8500;

app.use(express.static('static'));

app.get('/', (req, res) => {
    res.sendFile("D:/js projects/gmap clone/views/index.html");
})

app.listen(port, () => {
    console.log(`App is running on the port ${port}`);
})