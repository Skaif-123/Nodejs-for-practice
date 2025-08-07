const express = require("express");
const app = express();

Books = [
  {
    id: 1,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
  },
  {
    id: 3,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
  },
];

// Middleware
app.use(express.json());

/**
 * !Assigning all route
 * */

// root route
app.get("/", (req, res) => {
  res.status(200).json({
    message: "This is my Book Store",
  });
});

// get all books in json format
app.get("/all", (req, res) => {
  res.json(Books);
});

// getting a jSingle books from API;
app.get("/get/:id", (req, res) => {
  const singleBook = Books.find((item) => item.id === Number(req.params.id));

  if (singleBook) {
    res.status(201).json({
      message: "Book found",
      data: singleBook,
    });
  } else {
    res.status(404).json("Book not found");
  }
});

// Adding data using POST methods
app.post("/add", (req, res) => {
  const newBook = {
    id: Math.floor(Math.random() * 1000),
    title: `Title No ${Math.floor(Math.random() * 1000)}`,
    author: `Author Firoz No. ${Math.floor(Math.random() * 1000)}`,
  };
  Books.push(newBook);

  res.status(200).json({
    message: "New Book Added",
    data: newBook,
  });
});

// Updating Data using PUT method
app.put("/update/:id", (req, res) => {
  const findMyBookContent = Books.find((item) => {
    return item.id === Number(req.params.id);
  });

  if (findMyBookContent) {
    findMyBookContent.title = req.body.title || findMyBookContent.title;
    res.status(201).json({
      message: `My Book with Id ${req.params.id} is updated`,
      data: findMyBookContent,
    });
  } else {
    res.status(404).json({
      message: "Book not Found",
      data: null,
    });
  }
});

// deleting Data from Books API,
app.delete("/delete/:id", (req, res) => {
  findIndexOfBook = Books.findIndex(
    (item) => item.id === Number(req.params.id)
  );

  if (findIndexOfBook ==! -1) {
    deletedBook = Books.splice(findIndexOfBook, 1);
    res.status(200).json({
      message: "Book deleted",
      data: deletedBook,
    });
  }
  else{
    res.status(404).json({
      message: "Book not Found",
      data: null,
    });
  }
});

port = 3000;
app.listen(port, () => {
  console.log(`server is listening at ${port}`);
});


