const Order = require("../Models/Order");

const createOrder = async (req, res) => {

    try {

        const body = req.body;
        //conversion prodcutsInCart => array
        let cart = [];
        //loop on keys of prodcustInCart
        Object.keys(body.cart).forEach(key => {
            let item = body.cart[key];
            cart.push(item._id);
        });
        body.cart = cart;
        console.log(cart);
        const order = await Order.create(body);
        res.status(200).send({ error: false, message: "Order Received" });
    }

    catch (err) {
        res.status(200).send({ error: true, message: err.message });
    }

}

const getOrderById = async(req,res) => 
{
    try{
        const params = req.params;
        const order = await Order.findById(params.id);
        return res.status(200).send({error : false , message : "Done" , result : cart});
    }

    catch (err)
    {
        return res.status(200).send({error : true , message : "Error Occurred"});

    }
}

const deleteOrder = async (req,res) => 
{
    try{
        const params = req.params;
        const order = await Order.findByIdAndDelete(params.id)
        return res.status(200).send({error : false , message : "Order Cancelled"});
    }

    catch (err)
    {
        return res.status(200).send({error : true , message : "Error Occurred"});

    }
}

const updateOrder = async (req,res) => 
{
    try{
        const params = req.params;
        const body = req.body
        const order = await Order.findByIdAndUpdate(params.id , body);
        return res.status(200).send({error : false , message : "Deleted Successfully"});
    }

    catch (err)
    {
        return res.status(200).send({error : true , message : "Error Occurred"});

    }
}

const getOrder = async(req,res) => 
{
    try{
        const body = req.body;
        const order = await Order.find(body);
        if(order.length == 0)
        {
            return res.status(200).send({error : true , message : "Data not Found"});
        }
        return res.status(200).send({error : false , message : "Done" , result : order});
    }

    catch (err)
    {
        return res.status(200).send({error : true , message : "Error Occurred"});

    }
}


module.exports = { createOrder , getOrderById, deleteOrder , updateOrder , getOrder};