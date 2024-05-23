const { Schema, default: mongoose } = require("mongoose");

const OrderSchema = new Schema({
    fees: {
        type: Number,
    },
    totalprice: {
        type:   Number,
    },
    date: {
    type: Date,
    },
    status: {
        type: String,
    },
    shippingaddress: {
        type: String,
    }

});

const Order = mongoose.model('Order', OrderSchema);

module.exports = Order;