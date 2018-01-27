const router = require("express").Router();
const productController = require("../controllers/productController");

//to fetch all products 
router.route("/")
	.get(productController.findAll)
	.post(productController.create);

// to fetch all products in a particular category
router.route("/:category")
	.get(productController.findByCategory)
	.delete(productController.remove);




