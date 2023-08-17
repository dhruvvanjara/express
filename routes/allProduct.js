var express = require("express");
var router = express.Router();
const Listcontroller = require("../controllers/productController");

/* GET users listing. */
router.get("/", Listcontroller.getAll); //All Product
router.post("/", Listcontroller.post); //Create Product
router.get("/:id", Listcontroller.get); //filter by id
router.put("/:id", Listcontroller.put); //Update Product
router.delete("/:id", Listcontroller.delete); //Delete product by id

module.exports = router;
