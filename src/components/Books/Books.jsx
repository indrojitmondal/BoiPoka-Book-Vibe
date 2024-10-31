import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';

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
            <h3>{books.length}</h3>
        </div>
    );
};

export default Books;