const Book = require('../models/book.js')
const Tag = require('../models/Tag.js')

const getAllBooks = async(req, res) => {
    try{
        const books = await Book.findAll();
        res.status(200).json(books) 
    } catch (error) {
        res.status(500).json({message : "Hubo un error al traer los datos de libros"})
        console.log("Hubo un error, error: ", error)
    }
}

const insertBook = async(req, res) => {
    try{
        const newBook = await Book.create({
            title : req.body.title,
            author : req.body.author,
            description : req.body.description,
            votesCount : 0
        })
        if (req.body.tags){
            const tagsInstances = await Tag.findAll({ where : {id:req.body.tags}})

            await Book.addTags(tagsInstances);
        }

    } catch(error) {
        
    }
}

const deleteBook = async(req, res) => {
    try{
        await Book.destroy({ where : {id:req.params.id}})
        res.status(200).json({message : `"Se eliminò correctamente el libro con id ${req.params.id}`})
    } catch(error){
        res.status(500).json({message : "Ocurriò un error al intentar borrar"})
        console.log("Error al borrar ", error)
    }
}
module.exports = {insertBook, getAllBooks, deleteBook};