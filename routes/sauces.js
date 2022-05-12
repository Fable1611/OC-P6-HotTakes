const express = require("express");
const router = express.Router();

const saucesCtrl = require("../controllers/sauces");
const auth = require("../middleware/auth");

router.post("/sauces", auth, saucesCtrl.createProduct);
router.put("/sauces/:id", auth, saucesCtrl.modifyProduct);
router.delete("/sauces/:id", auth, saucesCtrl.deleteProduct);
router.get("/sauces/:id", auth, saucesCtrl.getOneProduct);
router.get("/sauces", auth, saucesCtrl.getAllProducts);

module.exports = router;
