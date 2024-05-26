const Supplier = require("../Models/Supplier");

const createSupplier = async (req, res) => {

    try {

        const body = req.body;
        const userCheck = await Supplier.findOne({ email: body.email });
        if (userCheck) {
            return res.status(200).send({ error: true, message: "Email Already exists" });
        }
        const user = await Supplier.create(body);
        res.status(200).send({ error: false, message: "User Created", result: user });
    }

    catch (err) {
        res.status(200).send({ error: true, message: err.message });
    }

}

const getSuppById = async(req,res) => 
{
    try{
        const params = req.params;
        const supplier = await Supplier.findById(params.id);
        return res.status(200).send({error : false , message : "Done" , result : supplier});
    }

    catch (err)
    {
        return res.status(200).send({error : true , message : "Error Occurred"});

    }
}

const deleteSupp = async (req,res) => 
{
    try{
        const params = req.params;
        const restaurateur = await Restaurateur.findByIdAndDelete(params.id)
        return res.status(200).send({error : false , message : "Deleted Successfully"});
    }

    catch (err)
    {
        return res.status(200).send({error : true , message : "Error Occurred"});

    }
}

const updateSupp = async (req,res) => 
{
    try{
        const params = req.params;
        const body = req.body
        const supp = await Supplier.findByIdAndUpdate(params.id , body);
        return res.status(200).send({error : false , message : "Updated Successfully", result : supp});
    }

    catch (err)
    {
        return res.status(200).send({error : true , message : "Error Occurred"});

    }
}

const getSupp = async(req,res) => 
{
    try{
        const body = req.body;
        const supplier = await Supplier.find(body);
        if(supplier.length == 0)
        {
            return res.status(200).send({error : true , message : "No Data Found"});
        }
        return res.status(200).send({error : false , message : "Done" , result : supplier});
    }

    catch (err)
    {
        return res.status(200).send({error : true , message : "Error Occurred"});

    }
}


module.exports = { createSupplier , getSuppById, deleteSupp , updateSupp , getSupp};