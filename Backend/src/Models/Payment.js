const { Schema, default: mongoose } = require("mongoose");

const PaymentSchema = new Schema({
    paymentDate: {
        type: Date,
        required: true
    },
   amount: {
        type:   Number,
        required: true
    },
    orderID: {
        type: String,
        type: Schema.Types.ObjectId,
        ref : "Order"
    }
});

const Payment = mongoose.model('Payment', PaymentSchema);

module.exports = Payment;