const User = require('../models/User.js')
const Comment = require('../models/Comment.js')
const Book = require('../models/Book.js')

const insertComment = async(req, res) => {
    try{
        const newComment = await Comment.create({
            content : req.body.content,
            count_votes : 0
        })
        console.log("Métodos disponibles en newBook:", Object.keys(newComment.__proto__));
        if (req.body.userId){
            const userInstance = await User.findOne({ where : {id:req.body.userId}})
            console.log("Se ingreso en el if", userInstance);

            await newComment.addUser(userInstance);    
        }
        if (req.body.bookId){
            const bookInstance = await Book.findOne({ where : {id:req.body.bookId}})
            console.log("Se ingreso en el if", bookInstance);

            await newComment.addBook(bookInstance);    
        }
        res.status(201).json({message : "Se creo correctaemente el comentario"})
    } catch (error) {
        res.status(500).json({message : "No se pudo crear el comentario"})
    }
}

module.exports = {insertComment};