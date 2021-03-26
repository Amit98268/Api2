const AddStock = require("../models/StockSchema");
//create
exports.create = async (req, res) => {
    // Rest of the code will go here
    const user = new AddStock({
        item: req.body.item,
        company: req.body.company,
        length: req.body.length,
        width: req.body.width,
        topColor: req.body.topColor,
        thickness: req.body.thickness,
        temper: req.body.temper,
        coating: req.body.coating,
        grade: req.body.grade,
        guardFilm: req.body.guardFilm,
        batchNumber: req.body.batchNumber,
        purchaseNumber: req.body.purchaseNumber
    });

    try {
        const newUser = await user.save()
        res.status(200).json({ newUser });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}
//admin also get the stock by this api......
exports.get = async (req, res) => {
    const stock = await AddStock.findOne(req.params.purchaseNumber);
    res.json({ res: stock });
}

exports.edit = async (req, res) => {
    try {
        const updatedAddStock = await AddStock.findOneAndUpdate(req.params.purchaseNumber).exec();
        updatedAddStock.set(req.body);
        var result = await updatedAddStock.save();
        res.json(result);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

exports.delete = async (req, res) => {
    try {
        await AddStock.findOneAndDelete(req.params.purchaseNumber).deleteOne();
        res.json({ message: "stock has been deleted" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}
