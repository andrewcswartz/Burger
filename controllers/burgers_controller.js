const burger = require("../models/burger");
const express = require("express");
const app = express();
const router = express.Router();

// setup middleware
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());


// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    burger.getAllBurgers(function (data) {

        var hbsObject = {
            burger: data
        };
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function (req, res) {
    burger.createBurger(
        "burgers",
        name, req.body.name,
        function (result) {
            // Send back the ID of the new quote
            res.json({
                id: result.insertId
            });
        });
});


// Export routes for server.js to use.
module.exports = router;