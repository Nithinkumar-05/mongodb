const stModel = require("../models/studentModels");

async function getData(req,res){
    const st = await stModel.find({});
    res.status(200).json(st);
};

async function postData(req,res){
    try{
        const s = {
            _id:req.body.id,
            name:req.body.name,
            phone:req.body.phone,
        };
        
        const st = await stModel.create(s);
        res.status(201).json(st);
    }catch(err){
        res.status(500).json({"msg":err.message});
    }
}
async function getSpec(req, res) {
    try {
        const { id } = req.params;  
        const st = await stModel.findById(id);
        if (!st) {
            return res.status(404).json({ "msg": "The specified id doesn't exist" });
        }
        return res.status(200).json(st);  // Return 200 status code with the student data
    } catch (err) {
        return res.status(500).json({ "msg": err.message });
    }
}
async function deleteSpec(req,res){
    try{
        const { id } = req.params;  
        const st = await stModel.findByIdAndDelete(id);
        if (!st) {
            return res.status(404).json({ "msg": "The specified id doesn't exist" });
        }
        return res.status(200).json({"msg":"Deleted Successfully"});
    }catch (err) {
        return res.status(500).json({ "msg": err.message });
    }
}
async function postSpecific(req, res) {
    try {
        const { id } = req.params;
        const options = { new: true }; 
        const st = await stModel.findByIdAndUpdate(id, req.body, options);

        if (!st) {
            return res.status(404).json({ "msg": "The specified id doesn't exist" });
        }

        return res.status(200).json(st);
    } catch (err) {
        return res.status(500).json({ "msg": err.message });
    }
}

module.exports = {getData,postData,getSpec,deleteSpec,postSpecific};