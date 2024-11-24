const express = require("express");
const router = express.Router();
//const bookModel = require("../models/book");

router.get("/", (req, res) => {
    res.json({ message: "Books API called !" });
})

module.exports = router; 