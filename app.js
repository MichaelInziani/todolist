
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const date = require(__dirname + "/date.js");

console.log(date.getDay());
console.log(date.getDate());

const app = express();

let items = ["Wake Up", "Eat", "Sleep"];

let workItems = [];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get("/", function (req, res) {
    let day = date.getDate();
    
    res.render("list", { listTitle: day, newListItem: items });

});


app.post("/", function (req, res) {
    let item = req.body.newItem;

    if (req.body.list === "Work") {
        workItems.push(item);
        res.redirect("/work");
    }
    else {
        items.push(item);
        res.redirect("/");

    }
    console.log(req.body);
});

app.get("/work", function (req, res) {
    res.render("list", { listTitle: "Work List", newListItem: workItems });
});

app.listen(process.env.PORT || 3000, function () {
    console.log("Server is running on port 3000");
});