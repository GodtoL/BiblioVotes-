const Book = require('../models/Book.js')
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

const getPopularBooks = async(req, res) => {
    try{
        const popularBooks = await Book.findAll({
            order : [['votes_count', 'DESC']],
            limit : 5
        })
        res.status(200).json(popularBooks)
    } catch(error){
        res.status(500).json({message : "Error al consultar la base de datos"})
        console.log("Error al obtener los libros populares ", error)
    }
}

const insertBook = async(req, res) => {
    try{
        const newBook = await Book.create({
            title : req.body.title,
            author : req.body.author,
            description : req.body.description,
            votes_count : 0
        })
        if (req.body.tags) {
            console.log("Tags en el request (antes de normalizar):", req.body.tags);
        
            // Normaliza req.body.tags para que sea siempre un arreglo
            if (!Array.isArray(req.body.tags)) {
                req.body.tags = [req.body.tags];
            }
        
            console.log("Tags en el request (después de normalizar):", req.body.tags);
        
            if (req.body.tags.length > 0) {
                const tagsInstances = await Tag.findAll({
                    where: { id: req.body.tags }
                });
                
                console.log("Tags encontrados:", tagsInstances);
                console.log("Métodos disponibles en newBook:", Object.keys(newBook.__proto__));

                if (tagsInstances.length > 0) {
                    await Promise.all(tagsInstances.map(tag => newBook.addTag(tag)));
                } else {
                    console.log("No se encontraron etiquetas para los IDs proporcionados.");
                    return res.status(400).json({ message: "No se encontraron etiquetas con los IDs proporcionados." });
                }
            }
        }
        
        
        res.status(201).json({message : "Se crea exitosamente el libro ", newBook})

    } catch(error) {
        res.status(500).json({message : "Error al crear el libro"})
        console.log("Hubo un error al crear" , error)
    }
}

const deleteBook = async(req, res) => {
    try{
        const deletebook = await Book.destroy({ where : {id:req.params.id}})
        if (deletebook === 0) {
            // Se eliminó el libro exitosamente
            res.status(404).json({message : "No se encontrò el libro"})
        }
        res.status(200).json({message : `Se eliminò correctamente el libro con id ${req.params.id}`})
    } catch(error){
        res.status(500).json({message : "Ocurriò un error al intentar borrar"})
        console.log("Error al borrar ", error)
    }
}
module.exports = {insertBook, getAllBooks, deleteBook, getPopularBooks};