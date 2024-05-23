const Restaurateur = require("../Models/Restaurateur");
const Supplier = require("../Models/Supplier")

const login = async (req, res) => {
    try {

        const info = req.body;
        const supp = await Supplier.findOne(info);
        const rest = await Restaurateur.findOne(info);

        console.log(supp);

        if(supp || rest)
        {
            res.status(200).send({error : false , message : "You've logged in successfully", result : supp ? supp : rest})
        }

        else{
            res.status(200).send({error : true , message : "Log in Failed"})
        }
    }

    catch (err) {
        res.status(200).send({error : true , message : err.message})
    }
}

module.exports = {
    login
}