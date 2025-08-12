
const Book = require("../bookSchema/books");

const getAllBooks = async (req, res) => {
  try {
    const allBooks = await Book.find({});
    if (allBooks?.length > 0) {
      res.status(200).json({
        success: true,
        message: "List Of Books Fetched",
        data: allBooks,
      });
    } else {
      res.status(400).json({
        success: false,
        message: "something is wrong",
      });
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Something is Wrong",
    });
  }
};

const getSingleBookById = async (req, res) => {
  try {
    const getCurrentBookID = req.params.id;
    const bookDetailsByID = await Book.findById(getCurrentBookID);
    if (!bookDetailsByID) {
      res.status(404).json({
        success: false,
        message: "something is wrong",
      });
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Sometthing wrong biddu",
    });
  }
};

const addNewBook = async (req, res) => {
  try {
    const newBookFormData = req.body;
    const newlyCreatedBook = await Book.create(newBookFormData);

    if (newBookFormData) {
      res.status(201).json({
        success: true,
        message: "Book Added successfully",
        data: newlyCreatedBook,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "cannot add book, something went wrong",
    });
  }
};

const updateBook = async (req, res) => {
  try {
    const updatedBookFormData = req.body;
    const getCurrentBookId = req.params.id;
    const updatedBook = await Book.findByIdAndUpdate(
      getCurrentBookId,
      updatedBookFormData,
      {
        new: true,
      }
    );

    if (!updatedBook) {
      res.status(404).json({
        success: false,
        message: "Kuch toh gabbard hai bhaya",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "cannot add book, something went wrong",
    });
  }
};

const deleteBook = async (req, res) => {
  try {
    const getCurrentBookID = req.params.id;
    const deletedBook = await Book.findByIdAndDelete(getCurrentBookID);

    if (!deletedBook) {
      res.status(404).json({
        success: false,
        message: "what all has gone wrong",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "cannot add book, something went wrong",
    });
  }
};

module.exports = {
  getAllBooks,
  getSingleBookById,
  addNewBook,
  updateBook,
  deleteBook,
};
