const { Schema, default: mongoose } = require("mongoose");

const RestaurateurSchema = new Schema({
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

    address: {

        type: String
    },

    phone: {
        type: String,
        // required: true
    },

    paymentCardNum: {
        type: String,
        // required: true
    },
    
    businessLicense: {
        type: String,
        // required: true
    },

    userType : {
        type: String
    }

});

const Restaurateur = mongoose.model('Restaurateur', RestaurateurSchema);

module.exports = Restaurateur;