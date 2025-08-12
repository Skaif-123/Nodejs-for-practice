const express = require("express");
const {
  getAllBooks,
  getSingleBookById,
  addNewBook,
  updateBook,
  deleteBook,
} = require("../book-controller/book-controller");

// create express router
const router=express.Router();

router.get("/get",getAllBooks);
router.get("/get/:id",getSingleBookById);
router.post("/add",addNewBook);
router.put("/update/:id",updateBook);
router.delete("/delete",deleteBook);

module.exports=router;