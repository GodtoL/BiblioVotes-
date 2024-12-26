const Book = require('../models/book.js')

const getAllBooks = async(req, res) => {
    try{
        const books = await Book.findAll();
        res.status(200).json(books) 
    } catch (error) {
        res.status(500).json({message : "Hubo un error al traer los datos de libros"})
        console.log("Hubo un error, error: ", error)
    }
}
// const insertBook = async(req, res) => {
//     try{
//         const newBook = await Book.create({
//             title : req.body.title,
//             author : req.body.author,
//             description : req.body.author,
//             votesCount :
//         })

//     } catch(error) {
        
//     }
// }
module.exports = {getAllBooks};