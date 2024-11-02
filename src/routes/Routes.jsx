import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";


import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../components/Home/Home";
import Dashboard from "../components/Dashboard/Dashboard";
import BookDetail from "../components/BookDetail/BookDetail";
import ListedBooks from "../components/ListedBooks/ListedBooks";
import Root from "../components/Root/Root";


const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        
        path:'books/:bookId',
       
        element: <BookDetail></BookDetail>,
        loader: ()=> fetch('/booksData.json'),  //worst way

      },
      {
        path: 'listedBooks',
        element: <ListedBooks></ListedBooks>,
        loader: ()=> fetch('/booksData.json') //Worst way 
        

      },
      {
        path: 'dashboard',
        element: <Dashboard></Dashboard>
      }
    ]
  },
]);

export default routes;