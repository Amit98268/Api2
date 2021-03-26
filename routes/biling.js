const express = require("express");
const router = express.Router();

const addStockController = require('../Controller/StockController');

router.post("/create", addStockController.create);
router.get("/get", addStockController.get);
router.put("/edit", addStockController.edit);
router.delete("/delete", addStockController.delete);

module.exports = router;