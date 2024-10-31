import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = () => {

    const [books, setBooks] = useState([]);
    useEffect(()=>{

        fetch('booksData.json')
        .then ( res => res.json())
        .then (data => setBooks(data))


    },[])
    return (
        <div>
            <h2 className="text-4xl font-bold text-center">Books</h2>
            <div className='grid grid-cols-3 gap-6 border border-gray-300 rounded-xl'>
                {
                    books.map(book => <Book  key={book.bookId} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;