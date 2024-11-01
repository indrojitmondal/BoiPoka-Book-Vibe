import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredList } from '../../utility/addToDB';
import Book from '../Book/Book';
import { useToast } from 'react-toastify';

const ListedBooks = () => {

    const allBooks = useLoaderData();
    console.log('allBooks', allBooks);

    const [readList, setReadList] = useState([]);

    useEffect(() => {
        const storedList = getStoredList();
        const storedListInt = storedList.map(id => parseInt(id));
        console.log(storedListInt);
        const readBooksList = allBooks.filter(book => storedListInt.includes(book.bookId));
        console.log('Ok', readBooksList);
        setReadList(readBooksList);
    }, []);

    const [sort, setSort]= useState('');

    const handleSort = sortType=>{
        setSort(sortType);
        if(sortType=='Rating'){
        const sortedReadList = [...readList].sort((a,b)=> a.rating-b.rating);
        setReadList(sortedReadList);
        }
        else{
            const sortedReadList = [...readList].sort( (a,b)=> a.totalPages-b.totalPages);
            setReadList(sortedReadList);
        }
    }

    return (
        <div>
            <h2 className="text-xl">Listed Books</h2>
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn m-1">{sort? `Sort By ${sort}`: 'Sort By'}</div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li onClick={()=>handleSort('Rating')}><a>Rating</a></li>
                    <li onClick={()=>handleSort('No of Pages')}><a>No of Pages</a></li>
                </ul>
            </div>

            <Tabs>
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>
                    <h2 className='text-2xl'>Books I read</h2>
                    {
                        readList.map(book => <Book book={book} key={book.bookId}></Book>)
                    }
                </TabPanel>
                <TabPanel>
                    <h2 className='text-2xl'>My Wish list</h2>
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default ListedBooks;