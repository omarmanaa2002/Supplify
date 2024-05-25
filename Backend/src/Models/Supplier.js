const { Schema, default: mongoose } = require("mongoose");

const SupplierSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        fName: {
            type: String,
            // required: true
        },
        lName: {
            type: String,
            // required: true
        }
    },
    // address: {
    //     type: String,

    // },
    phone: {
        type: String,
        // required: true
    },
    bankAccount: {
        type: String,
        // required: true
    },
    businessLicense: {
        type: String,
        // required: true
    },

    userType : {
        type : String
    }

});

const Supplier = mongoose.model('Supplier', SupplierSchema);

module.exports = Supplier;