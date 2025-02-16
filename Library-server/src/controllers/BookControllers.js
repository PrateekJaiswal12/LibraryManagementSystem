import { findAllBooks, modifyBook, queryBooks, registerBook, removeBook } from "../services/BookServices.js";


// ** CRUD ** Controllers

async function getAllBooks(req, res) {
    try {
        const books = await findAllBooks();
        res.status(202).json({message: "Retrieved all books", count: books.length, books});
    } catch (error) {
        res.status(500).json({message: "Unable to fetch all books"});
    }
}

async function createBook(req, res) {
    const book = req.body;
    try {
        const savedBook = await registerBook(book);
        res.status(201).json({message: "Book created successfully", savedBook});
    } catch (error) {
        res.status(500).json({message: "Unable to save book at this moment", error});
    }
}

async function updateBook(req, res) {
    const book = req.body;
    try {
        const updatedBook = await modifyBook(book);
        if(!updatedBook) {
            res.status(404).json({message: "Unable to update book which doesn't exist"});
        }
        res.status(202).json({message: "Book updated successfully", updatedBook});
    } catch (error) {
        res.status(500).json({message: "Unable to update book at this moment", error});
    }
}


async function deleteBook(req, res) {
    const { barcode } = req.params;
    try {
        const deletedBook = await removeBook(barcode);
        if(!deletedBook) {
            res.status(404).json({message: "Unable to delete book which doesn't exist"});
        }
        res.status(202).json({deletedBook});
    } catch (error) {
        res.status(500).json({error, message: "Unable to delete book at this moment"});
    }
}




// ** Query and Pagination ** Controllers

async function searchForBooksByQuery(req, res) {
    const { barcode, title, author, description, subject, genre, page = 1, limit = 25 } = req.query;   

    const books = await queryBooks(
        Number(page),
        Number(limit),
        title,
        barcode,
        author,
        description,
        subject,
        genre
    );

    res.status(201).json({message: "Retrived books from query", page: books});
}

export { createBook, getAllBooks, updateBook, deleteBook, searchForBooksByQuery };