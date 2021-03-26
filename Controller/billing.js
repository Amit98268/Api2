const billing = require("../models/billingSchema");
//create
exports.create = async (req, res) => {
    // Rest of the code will go here
    const user = new billing({
        orderId: req.body.orderId,
        company: req.body.company,
        contact: req.body.contact,
        name: req.body.name,
        Date: req.body.date,
        length: req.body.length,
        width: req.body.width,
        topColor: req.body.topColor,
        thickness: req.body.thickness,
        temper: req.body.temper,
        coating: req.body.coating,
        grade: req.body.grade,
        guardFilm: req.body.guardFilm,
        gst: req.body.gst,
        address: req.body.address,
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
    const stock = await billing.findOne(req.params.purchaseNumber);
    res.json({ res: stock });
}

exports.edit = async (req, res) => {
    try {
        const updatedAddStock = await billing.findOneAndUpdate(req.params.purchaseNumber).exec();
        updatedbilling.set(req.body);
        var result = await updatedAddStock.save();
        res.json(result);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

exports.delete = async (req, res) => {
    try {
        await billing.findOneAndDelete(req.params.purchaseNumber).deleteOne();
        res.json({ message: "stock has been deleted" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}
