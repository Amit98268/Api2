const express = require("express");
const router = express.Router();

const OrderNoticeController = require('../Controller/OrderNoticeController');

router.post("/create", OrderNoticeController.create);
router.get("/get", OrderNoticeController.get);

module.exports = router;