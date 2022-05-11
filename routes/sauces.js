const express = require("express");
const router = express.Router();

const saucesCtrl = require("../controllers/sauces");

router.post("/sauces", saucesCtrl.createProduct);
router.put("/sauces/:id", saucesCtrl.modifyProduct);
router.delete("/sauces/:id", saucesCtrl.deleteProduct);
router.get("/sauces/:id", saucesCtrl.getOneProduct);
router.get("/sauces", saucesCtrl.getAllProducts);

module.exports = router;
