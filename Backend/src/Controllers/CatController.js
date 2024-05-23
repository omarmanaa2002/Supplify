const Catalogue = require("../Models/Catalogue");

const createCatalogue = async (req, res) => {

    try {

        const body = req.body;
        const catalogue = await Catalogue.create(body);
        res.status(200).send({ error: false, message: "Catalogue Created" });
    }

    catch (err) {
        res.status(200).send({ error: true, message: err.message });
    }

}

const getCatById = async(req,res) => 
{
    try{
        const params = req.params;
        const catalogue = await Catalogue.findById(params.id);
        return res.status(200).send({error : false , message : "Done" , result : catalogue});
    }

    catch (err)
    {
        return res.status(200).send({error : true , message : "Error Occurred"});

    }
}

const deleteCat = async (req,res) => 
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

const updateCat = async (req,res) => 
{
    try{
        const params = req.params;
        const body = req.body
        const catalogue = await Catalogue.findByIdAndUpdate(params.id , body);
        return res.status(200).send({error : false , message : "Deleted Successfully"});
    }

    catch (err)
    {
        return res.status(200).send({error : true , message : "Error Occurred"});

    }
}

const getCat = async(req,res) => 
{
    try{
        const body = req.body;
        const catalogue = await Catalogue.find(body);
        if(catalogue.length == 0)
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


module.exports = { createCatalogue , getCatById, deleteCat , updateCat , getCat};