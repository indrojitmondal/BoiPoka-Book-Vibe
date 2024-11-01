import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const BookDetail = () => {
    const {bookId}= useParams();
    console.log(typeof bookId);
    const id = parseInt(bookId);
    console.log(typeof id);
    const data = useLoaderData();
    console.log(data);
    const book = data.find( book => book.bookId ===id);
    console.log(book);
    const {bookId: currentBookId, image,bookName} = book;
    return (
        <div className='space-y-3 mb-2'>
            <h2>Book Details: {currentBookId}</h2>
            <img className='w-96' src={image} alt={bookName} />
            <div className='flex gap-5'>
            <button className="btn btn-active btn-accent">Read </button>
            <button className="btn btn-active btn-accent">WishList</button>
            </div>
        </div>
    );
};

export default BookDetail;