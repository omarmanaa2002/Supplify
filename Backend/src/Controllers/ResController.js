const Restaurateur = require("../Models/Restaurateur");

const createRestaurateur = async (req, res) => {

    try {

        const body = req.body;
        const userCheck = await Restaurateur.findOne({ email: body.email });
        if (userCheck) {
            return res.status(200).send({ error: true, message: "Email Already exists" });
        }
        const user = await Restaurateur.create(body);
        res.status(200).send({ error: false, message: "User Created" });
    }

    catch (err) {
        res.status(200).send({ error: true, message: err.message });
    }

}

const getResById = async(req,res) => 
{
    try{
        const params = req.params;
        const restaurateur = await Restaurateur.findById(params.id);
        return res.status(200).send({error : false , message : "Done" , result : restaurateur});
    }

    catch (err)
    {
        return res.status(200).send({error : true , message : "Error Occurred"});

    }
}

const deleteRes = async (req,res) => 
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

const updateRes = async (req,res) => 
{
    try{
        const params = req.params;
        const body = req.body
        const restaurateur = await Restaurateur.findByIdAndUpdate(params.id , body);
        return res.status(200).send({error : false , message : "Deleted Successfully"});
    }

    catch (err)
    {
        return res.status(200).send({error : true , message : "Error Occurred"});

    }
}

const getRes = async(req,res) => 
{
    try{
        const body = req.body;
        const restaurateur = await Restaurateur.find(body);
        if(restaurateur.length == 0)
        {
            return res.status(200).send({error : true , message : "No Data Found"});
        }
        return res.status(200).send({error : false , message : "Done" , result : restaurateur});
    }

    catch (err)
    {
        return res.status(200).send({error : true , message : "Error Occurred"});

    }
}


module.exports = { createRestaurateur , getResById, deleteRes , updateRes , getRes};