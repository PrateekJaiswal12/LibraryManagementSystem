import { Book } from "../models/BookModel.js";


export async function findAllBooks() {
    try {
        const books = await Book.find();
        return books;
    } catch (error) {
        throw new Error({message: 'Cannot fetch all the books',error: error.message });
    }
}

export async function findBookById(id) {
    try {
        const book = await Book.findById(id);
        if(book) {
            return book;
        }

        throw new Error("The specified book doesn't exist");
    } catch (error) {
        throw new Error({message: 'Cannot fetch specified book',error: error.message });
    }
}

export async function modifyBook(book) {
    try {
        const id = await Book.findOneAndUpdate({barcode: book.barcode}, book, {new: true})

        if(!id) {
            throw new Error('This book does not exist');
        }

        return book;
    } catch (error) {
        throw new Error(error.message);
    }
}


export async function registerBook(book) {
    const savedBook = new Book(book);

    if(!savedBook) {
        throw new Error({message:'Cannot fetch the registering Book', error: error.message});
    }

    return await savedBook.save();
}


export async function removeBook(barcode) {
    try {
        const deletedBook = await Book.findOneAndDelete({ barcode });

        if (!deletedBook) {
            throw new Error("Book Does Not Exist");
        }

        return { message: "Successfully Deleted", deletedBook };
    } catch (error) {
        throw new Error(error.message);
    }
}


export async function queryBooks(page , limit , title , barcode , description , author , subject , genre) {
    const books = await Book.find();
    let filteredBooks = [];

    books.forEach((book) => {
        if(barcode) {
            if(book.barcode.toLowerCase().includes(barcode.toLowerCase()) && !filteredBooks.some(b => b['barcode'] === book.barcode)) {
                filteredBooks.push(book);
            }
        }

        if(title) {
            if(book.title.toLowerCase().includes(title.toLowerCase()) && !filteredBooks.some(b => b['barcode'] === book.barcode)) {
                filteredBooks.push(book);
            }
        }

        if(description) {
            if(book.description.toLowerCase().includes(description.toLowerCase()) && !filteredBooks.some(b => b['barcode'] === book.barcode)) {
                filteredBooks.push(book);
            }
        }

        if(author) {
            if(book.authors.some(a => a.toLowerCase().includes(author.toLowerCase())) && !filteredBooks.some(b => b['barcode'] === book.barcode)) {
                filteredBooks.push(book);
            }
        }

        if(subject) {
            if(book.subjects.some(s => s.toLowerCase().includes(subject.toLowerCase())) && !filteredBooks.some(b => b['barcode'] === book.barcode)) {
                filteredBooks.push(book);
            }
        }

        if(genre) {
            if(book.genre.toLowerCase() ===  (genre.toLowerCase()) && !filteredBooks.some(b => b['barcode'] === book.barcode)) {
                filteredBooks.push(book);
            }
        }

    });

    return paginateBooks(filteredBooks, page, limit);
}


export async function paginateBooks(books, page, limit) {
    
    let pageBooks = [];
    const pages = Math.ceil(books.length / Number(limit));
    const startPoint = (Number(pages) - 1) * Number(limit);


    if(pages === Number(page)) {
        pageBooks = books.slice(startPoint);
    }   else{
        const endPoint = startPoint + Number(limit);
        pageBooks = books.slice(startPoint, endPoint);
    }


    const pageObject = {
        totalCount: books.length,
        currentPage: Number(page),
        totalPages: pages,
        limit: Number(limit),
        pageCount: pageBooks.length,
        items: pageBooks
    }

    return pageObject;
}