import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./components/Contact";
import Home from "./components/Home";
import MyNav from "./components/MyNav";
import About from "./components/About";
import SignUp from './components/Signup';
import ProtectedRoute from './components/ProtectedRoute';
import Product from './components/Product';
import Loading from './components/Loading';
import Profile from './components/Profile';
import { useState } from 'react';


function App() {
  const [userLogined, setUserLogined] = useState(
    localStorage.getItem("userLogined") === "true"
);
  const route = createBrowserRouter([
    {
      path: "/",
      element: <>
      <MyNav userLogined={userLogined} />
      <Home />
    </>,
    },
    {
      path: "/About",
      element: (
        <>
          <MyNav userLogined={userLogined} />
          <About />
        </>
      ),
    },
    {
      path: "/Contact",
      element: (
        <>
          <MyNav userLogined={userLogined} />
          <Contact />
        </>
      ),
    },
    {
      path: "/Product",
      element: (
        <>
          <MyNav userLogined={userLogined} />
           <Product />
          
        </>
      ),
    },
    {
      path: "/Login",
      element: (
        <>
          <MyNav userLogined={userLogined} />
          <Loading userLogined={userLogined} setUserLogined={setUserLogined}/>
        </>
      ),
    },
    {
      path: "/Signup",
      element: (
        <>
          <MyNav userLogined={userLogined} />
          <SignUp />
        </>
      ),
    },
    {
      path: "/Profile",
      element: (
        <>
          <MyNav userLogined={userLogined} />
          <ProtectedRoute redirectTo='/Profile' userLogined={userLogined}>
          <Profile userLogined={userLogined} setUserLogined={setUserLogined} />
          </ProtectedRoute>
        </>
      ),
    },
  ]);
  return (
    <>
      <RouterProvider router={route} />
    </>
  );
}

export default App;
