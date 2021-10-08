const express = require("express")
const router = express.Router();
const fs = require("fs");

let food = "";
router.get("/:food", (req, res) => {
    food = req.params.food;
    res.json({name: food,
        ingredients: ["Salt", "flour"],
        instructions: ["mix salt and flour"]});
})

router.post("/", (req, res) => {
        //+req.body.name+
    fs.writeFile("./data/new_recipe.json", JSON.stringify(req.body), err => {
        if(err) {
            console.log(err);
            return;
        }
    res.json(req.body);
    console.log("recipe: added!");
    })
})
/*
router.get("/", (req, res) => {
    fs.readFile('./data/new_recipe.json', 'utf8', function (err, data) {
        if (err) throw err;
        obj = JSON.parse(data);
        res.send(JSON.stringify(obj));
      });
    console.log("recipe: sent!");
})
*/

module.exports = router;