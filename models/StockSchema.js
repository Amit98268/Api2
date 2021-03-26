const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const M_StockSchema = new Schema({
    item:
    {
        type: String,
        //required: true
    },
    company:
    {
        type: String,
        //required: true
    },
    topColor:
    {
        type: String,
        //required: true
    },
    thickness:
    {
        type: Number,
        //required: true
    },
    width:
    {
        type: Number,
        //required: true
    },
    length:
    {
        type: Number,
        //required: true
    },
    temper:
    {
        type: String,
        //required: true
    },
    coating:
    {
        type: Number,
        //required: true
    },
    grade:
    {
        type: String,
        //required: true
    },
    guardFilm:
    {
        type: Number,
        //required: true
    },
    batchNumber:
    {
        type: Number,
        //required: true
    },
    purchaseNumber:
    {
        type: Number,
        //required: true
    },
    VehicleNumber:
    {
        type: Number,
        //required: true
    }

});

const StockList = mongoose.model("M_Stock", M_StockSchema);
module.exports = StockList;