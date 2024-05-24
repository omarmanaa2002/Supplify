const { Schema, default: mongoose } = require("mongoose");
const Catalogue = require("./Catalogue");

const OrderSchema = new Schema({
    quantity: {
        type: Number,
    },
    totalprice: {
        type:  Number,
    },
    time: {
    type: String,
     },

    shippingaddress: {
         type: String,
     },
    cart : {
        type: [Schema.Types.ObjectId]
    },
    Companyname:{
        type: String
    },
     Provinces:{
        type: String
    },
    Postalzip:{
        type: String
    },
    Email:{
        type: String
    },
    Phone:{
        type: String
    },
    ordernote:{
        type: String
    }

});

const Order = mongoose.model('Order', OrderSchema);

module.exports = Order;