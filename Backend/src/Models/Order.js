const { Schema, default: mongoose } = require("mongoose");
const Catalogue = require("./Catalogue");

const OrderSchema = new Schema({
    quantity: {
        type: Number,
    },
    totalprice: {
        type:  Number,
    },
     //date: {
     //type: Date,
     //},

    //shippingaddress: {
      //   type: String,
     //},
    cart : {
        type: [Schema.Types.ObjectId]
    }

});

const Order = mongoose.model('Order', OrderSchema);

module.exports = Order;