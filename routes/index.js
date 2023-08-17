var express = require("express");
var router = express.Router();
const app = express();
const productRoute = require("./allProduct");
app.use(express.json());
app.use("/all-product", productRoute);
/* GET home page. */
app.listen(3005, () => {
  console.log("server started on port 3005");
});

router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = router;
