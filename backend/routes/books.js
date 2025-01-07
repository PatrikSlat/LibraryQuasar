const express = require("express");
const router = express.Router();
const bookModel = require("../models/book.js");

router.get("/all", async (req, res) => { // api/books/all -> fetching all books
    try{
        const books = await bookModel.allBooks();
        res.json(books)
        console.log(books)
    }catch(err){
        console.log(err);
        res.status(500).json({error: "INTERNAL SERVER ERROR !"})
    }
})

module.exports = router; 