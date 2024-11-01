import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
    const {bookId, bookName, author, image, totalPages, rating } = book;
    return (
        <Link to={`/books/${bookId}`}>
            <div className="card bg-base-100 w-96 shadow-xl">
                <figure>
                    <img
                        src={image}
                        className='h-[166px]'
                        alt={bookName} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        The Catcher in the Rye
                        {/* <div className="badge badge-secondary"></div> */}
                    </h2>

                    {/* <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div> */}
                    <p className='text-lg'>By-{author}</p>
                    <h2 className='text-lg font-bold'>Rating: {rating}</h2>
                    <h2 className='text-lg font-bold'>No of Pages: {totalPages}</h2>
                </div>
            </div>
        </Link>
    );
};

export default Book;