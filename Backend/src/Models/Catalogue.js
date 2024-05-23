const { Schema, default: mongoose } = require("mongoose");

const CatalogueSchema = new Schema({
    descrip: {
        type: String,
       // required: true
    },

    suppID:{
        type: Schema.Types.ObjectId,
        ref : "Supplier"
    },

    image: {
        type: String,
        //required: true
    },

    name: {
        type: String
      
    },

    price: {
        type: Number,
    },

    prodType: {
        type: String,
        // required: true
    },
 
    weight: {
        type: Number,
        // required: true
    },

     quantity: {
        type: Number,
        // required: true
    },


    proddate: {
        type: Date
    },
    
    expdate: {
        type: Date
    }


});

const Catalogue = mongoose.model('Catalogue', CatalogueSchema);

module.exports = Catalogue;