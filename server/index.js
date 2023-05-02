const express = require("express");
const app = express();




app.get('/', (req, res) => {
    res.send("hello world");
});
app.listen(3001, () => {
    console.log("running the port on 3001");
});