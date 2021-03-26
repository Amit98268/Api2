const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const M_StockSchema = new Schema({

    orderId: String,
    company: String,
    contact: String,
    name: String,
    Date: Date,
    grade: String,
    length: Number,
    topColor: String,
    thickness: Number,
    temper: String,
    coating: String,
    grade: String,
    guardFilm: String,
    gst: Number,
    weight: Number,
    width: Number,
    gst: String,
    address: String
});

const StockList = mongoose.model("M_Stock", M_StockSchema);
module.exports = StockList;