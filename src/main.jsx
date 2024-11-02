import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./components/Root/Root";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Home from "./components/Home/Home";
import Dashboard from "./components/Dashboard/Dashboard";
import BookDetail from "./components/BookDetail/BookDetail";
import ListedBooks from "./components/ListedBooks/ListedBooks";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import routes from "./routes/Routes";




ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
    <ToastContainer />
  </React.StrictMode>
);