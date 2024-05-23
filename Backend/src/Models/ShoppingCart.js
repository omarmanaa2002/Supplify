const { Schema, default: mongoose } = require("mongoose");

const ShoppingCartSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    quantity: {
        type:   Number,
        required: true
    },
    shopcartID: {
        prodID:{
            type: Schema.Types.ObjectId,
            ref : "Catalogue"
        },
        orderID: {
            type: String,
            type: Schema.Types.ObjectId,
            ref : "Order"
        }
    },
});

const ShoppingCart = mongoose.model('ShoppingCart', ShoppingCartSchema);

module.exports = ShoppingCart;