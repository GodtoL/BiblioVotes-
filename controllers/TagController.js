const Tag = require('../models/Tag.js')

const insertTag = async(req, res) => {
    try{
        const newTag = await Tag.create({
            name : req.body.name
        })
        res.status(201).json(newTag);

    } catch (error) {
        res.status(500).json({message : "Error al crear el tag"});
        console.log("Error al crear el tag ", error);
    }
}

module.exports = {insertTag};