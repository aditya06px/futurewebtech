import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css'
import reportWebVitals from './reportWebVitals';
import ContactUs from './Component/ContactUs/ContactUs';
import HomePage from './Component/HomePage/HomePage';
import Nav from './Component/Nav/Nav';
import OurServicePage from './Component/OurServicePage/OurServicePage';
import AboutUsPage from './Component/AboutUsPage/AboutUsPage'
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Footer from './Component/Footer/Footer';


const Index = () => {
  const [activePage, setActivePage] = useState('Home');

  const handleItemClick = (page) => {
    setActivePage(page);
};

    return (
      <React.Fragment>
        <div> 
        <Nav activePage={activePage} handleItemClick={handleItemClick}  />
        </div>
        <Outlet />
        <Footer activePage={activePage} handleItemClick={handleItemClick}  />
      </React.Fragment>
    );
  };

  const appRouter = createBrowserRouter([
    {
      path: "/", 
      element: <Index />, 
    //   errorElement: <Error />, 
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/service",
          element: <OurServicePage />  
        },
        {
          path: "/about",
          element: <AboutUsPage   />,  
        },
        {
          path: "/contact",
          element: <ContactUs />,
        },
      ],
    },
  ]);



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />); 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
