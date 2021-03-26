const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderNoticeSchema = new Schema({

    cilent_name:
    {
        type: String,
        //required: true
    }

});

const StockList = mongoose.model("OrderNotice", OrderNoticeSchema);
module.exports = StockList;