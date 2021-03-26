const OrderNotice = require("../models/OrderNoticeSchema");
//create
exports.create = async (req, res) => {
    // Rest of the code will go here
    const user = new OrderNotice({

        company: req.body.company,
        remark:req.body.remark,
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
    const stock = await OrderNotice.findOne(req.params.purchaseNumber);
    res.json({ res: stock });
}

