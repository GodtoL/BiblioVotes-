const User = require('../models/User.js')
const Comment = require('../models/Comment.js')
const Book = require('../models/Book.js')

const insertComment = async(req, res) => {
    try{
        console.log("lo que llega" , req.body)
        const newComment = await Comment.create({
            content : req.body.content,
            votesCount : req.body.votesCount || 0,
            bookId: req.body.bookId,
            userId: req.body.userId || 4
        })
        
        res.status(201).json( { message : "Se creo correctaemente el comentario"} )
    } catch (error) {
        res.status(500).json( { message : "No se pudo crear el comentario" } )
        console.log("Error al crear el comentario ", error)
    }
}

module.exports = {insertComment};