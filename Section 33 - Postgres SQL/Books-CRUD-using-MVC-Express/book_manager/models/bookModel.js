// importing that pool functionality from /db/db.js
import pool from '../db/db.js';


// Get all books
/*
    1: const getAllBooks = async () => { ... }
    This is an arrow function expression stored in a const variable named getAllBooks.

    2: export const getAllBooks ...
    This is an ES6 named export, which means the function is being exported by name so it can be imported elsewhere like:
        import { getAllBooks } from './booksController.js';
*/
export const getAllBooks = async () => {
  const result = await pool.query("SELECT * FROM books ORDER BY id ASC");
  return result.rows;  
};


// Add a book
export const addBook = async (title,author) => {
  await pool.query("INSERT INTO books(title,author) VALUES($1,$2)",
    [title,author]
  );
};


// update a book (based on id we update title,author)
export const updateBook = async (id,title,author) => {
    await pool.query("UPDATE books SET title=$1, author=$2 WHERE id=$3",
        [title,author,id]
    );
};


// Delete a book(based on id we run delete query)
export const deleteBook = async (id) => {
  await pool.query("DELETE FROM books WHERE id=$1",[id]);  
};


// No need to use (export default) since we already exported all above functions
// using export const getAllBooks ... syntax