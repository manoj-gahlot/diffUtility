const express = require("express");
const bodyParser = require("body-parser");
const algo = require("./public/javascript/algo.js")
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});
app.post("/", function (req, res) {
    // alert("hello");
    res.set('Content-Type', 'text/plain');
    // console.log(req.body);
    res.send(algo(req.body.first, req.body.second));
})
// app.get("/index.css", function (req, res) {
//     res.set("Content-Type", "text/css");
//     // console.log(req.body);
//     res.sendFile(__dirname + "/index.css");
// });
// app.get("/index.js", function (req, res) {
//     res.set("Content-Type", "text/javascript");
//     // console.log(req.body);
//     res.sendFile(__dirname + "/index.js");
// });
app.listen(3000);
