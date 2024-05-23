const Payment = require("../Models/Payment");
const Order = require("../Models/Payment");

const createPay = async (req, res) => {

    try {

        const body = req.body;
        const payment = await Payment.create(body);
        res.status(200).send({ error: false, message: " Payment Success" });
    }

    catch (err) {
        res.status(200).send({ error: true, message: err.message });
    }

}

const getPayById = async(req,res) => 
{
    try{
        const params = req.params;
        const payment = await Payment.findById(params.id);
        return res.status(200).send({error : false , message : "Done" , result : cart});
    }

    catch (err)
    {
        return res.status(200).send({error : true , message : "Error Occurred"});

    }
}

const deletePay = async (req,res) => 
{
    try{
        const params = req.params;
        const payment = await Payment.findByIdAndDelete(params.id)
        return res.status(200).send({error : false , message : "Invoice deleted"});
    }

    catch (err)
    {
        return res.status(200).send({error : true , message : "Error Occurred"});

    }
}

const updatePay = async (req,res) => 
{
    try{
        const params = req.params;
        const body = req.body
        const payment = await Payment.findByIdAndUpdate(params.id , body);
        return res.status(200).send({error : false , message : "Deleted Successfully"});
    }

    catch (err)
    {
        return res.status(200).send({error : true , message : "Error Occurred"});

    }
}

const getPay = async(req,res) => 
{
    try{
        const body = req.body;
        const payment = await Payment.find(body);
        if(payment.length == 0)
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


module.exports = { createPay , getPayById, deletePay , updatePay , getPay};