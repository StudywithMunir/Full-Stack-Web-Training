// importing all functions from /models/bookModel.js
// Note: instead of calling all functions inside import we can use
// import * as bookModel from '../models/bookModel.js';

import {  getAllBooks,addBook, updateBook, deleteBook  } from '../models/bookModel.js';


// Show book list (passing express objects req,res)
export const renderBooks = async (req,res) => {
  // we use await bcz in getAllBooks query was run 
  const books = await getAllBooks();
  // passing books object that holds the row and its fields
  res.render("index", {books});
};


// Add new book
export const createBook = async (req, res) => {
    // Destructuring title and author from form input submitted by the user
    const { title, author } = req.body;

    // Our addBook function from bookModel expects 2 parameters — title and author, which we pass from the form input
    await addBook(title, author);

    // After adding the book, redirect to the home page
    res.redirect("/");
};


// Update a book
export const editBook = async (req, res) => {
    // Destructuring the book ID from the route parameters
    const { id } = req.params;

    // Destructuring title and author from the form input submitted by the user
    const { title, author } = req.body;

    // Calling updateBook with the provided ID, title, and author
    await updateBook(id, title, author);

    // Redirecting to the home page after updating the book
    res.redirect("/");
};


// Delete a book
export const removeBook = async (req,res) => {
    const { id } = req.params;
    await deleteBook(id);
    res.redirect("/");
}