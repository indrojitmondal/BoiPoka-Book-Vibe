import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToStoredReadList, addToStoredWishedList } from '../../utility/addToDB';

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

    const handleMarkAsRead = (id)=>{

        console.log('Mark As Read', id);
        addToStoredReadList(id);

    }
    const handleAddToWishList = (id)=>{

        console.log('Mark As Wished', id);
        addToStoredWishedList(id);

    }
    return (
        <div className='space-y-3 mb-2'>
            <h2>Book Details: {currentBookId}</h2>
            <img className='w-96' src={image} alt={bookName} />
            <div className='flex gap-5'>
            <button onClick={()=> handleMarkAsRead(bookId)} className="btn btn-active btn-accent">Mark As Read </button>
            <button onClick={()=> handleAddToWishList(bookId)}  className="btn btn-active btn-accent">Add To WishList</button>
            </div>
        </div>
    );
};

export default BookDetail;