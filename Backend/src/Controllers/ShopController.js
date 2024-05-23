const ShoppingCart = require("../Models/ShoppingCart");

const createShopCart = async (req, res) => {

    try {

        const body = req.body;
        const cart = await ShoppingCart.create(body);
        res.status(200).send({ error: false, message: "item added to your cart" });
    }

    catch (err) {
        res.status(200).send({ error: true, message: err.message });
    }

}

const getShopCartById = async(req,res) => 
{
    try{
        const params = req.params;
        const cart = await ShoppingCart.findById(params.id);
        return res.status(200).send({error : false , message : "Done" , result : cart});
    }

    catch (err)
    {
        return res.status(200).send({error : true , message : "Error Occurred"});

    }
}

const deleteShopCart = async (req,res) => 
{
    try{
        const params = req.params;
        const cart = await ShoppingCart.findByIdAndDelete(params.id)
        return res.status(200).send({error : false , message : "Deleted Successfully"});
    }

    catch (err)
    {
        return res.status(200).send({error : true , message : "Error Occurred"});

    }
}

const updateShopCart = async (req,res) => 
{
    try{
        const params = req.params;
        const body = req.body
        const cart = await Catalogue.findByIdAndUpdate(params.id , body);
        return res.status(200).send({error : false , message : "Deleted Successfully"});
    }

    catch (err)
    {
        return res.status(200).send({error : true , message : "Error Occurred"});

    }
}

const getShopCart = async(req,res) => 
{
    try{
        const body = req.body;
        const cart = await ShoppingCart.find(body);
        if(cart.length == 0)
        {
            return res.status(200).send({error : true , message : "Data not Found"});
        }
        return res.status(200).send({error : false , message : "Done" , result : catalogue});
    }

    catch (err)
    {
        return res.status(200).send({error : true , message : "Error Occurred"});

    }
}


module.exports = { createShopCart , getShopCartById, deleteShopCart , updateShopCart , getShopCart};