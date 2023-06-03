const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const algo = require("./public/javascript/algo.js");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});
app.post("/", function (req, res) {
    // alert("hello");
    // res.set('Content-Type', 'text/plain');
    // console.log(req.body);
    // console.log(algo(req.body.response1, req.body.response2));
    // console.log("ehllsdlfjk");
    const diff = algo(req.body.response1, req.body.response2);
    // console.log(resp.lines1, resp.lines2);
    res.render("home", { responses: diff });
    console.log("sdklfjsd");
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
