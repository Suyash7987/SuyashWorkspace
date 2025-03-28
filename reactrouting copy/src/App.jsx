import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./components/Contact";
import Home from "./components/Home";
import MyNav from "./components/MyNav";
import About from "./components/About";
import SignUp from "./components/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import Product from "./components/Product";
import Loading from "./components/Loading";
import Profile from "./components/Profile";
import { useState,useEffect } from "react";
import View from "./components/View";
import Cart from "./components/Cart";

function App() {
  const [userLogined, setUserLogined] = useState(
    localStorage.getItem("userLogined") ===true
  );
   console.log("App " ,userLogined)
  // useEffect(() => {
  //   // This ensures the user state persists across page reloads
  //   localStorage.setItem("userLogined", userLogined.toString());
  // }, [userLogined]);

  const handleLoginSuccess = () => {
    setUserLogined("true");  // Change user login state to true on successful login
  };
  const route = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <MyNav userLogined={userLogined}setUserLogined={setUserLogined} />
          <Home />
        </>
      ),
    },
    {
      path: "/About",
      element: (
        <>
          <MyNav userLogined={userLogined} setUserLogined={setUserLogined} />
          <About />
        </>
      ),
    },
    {
      path: "/Contact",
      element: (
        <>
          <MyNav userLogined={userLogined}setUserLogined={setUserLogined} />
          <Contact />
        </>
      ),
    },
    {
      path: "/Product",
      element: (
        <>
          <MyNav userLogined={userLogined} setUserLogined={setUserLogined} />
          <Product />
        </>
      ),
    },
    {
      path: "/View/:index",
      element: (
        <>
          <MyNav userLogined={userLogined}setUserLogined={setUserLogined} />
          <View />
        </>
      ),
    },
    {
      path: "/Login",
      element: (
        <>
          <MyNav userLogined={userLogined} setUserLogined={setUserLogined} />
          <Loading userLogined={userLogined} setUserLogined={setUserLogined}  handleLoginSuccess={handleLoginSuccess}/>
        </>
      ),
    },
    {
      path: "/Cart",
      element: (
        <>
          <MyNav userLogined={userLogined} setUserLogined={setUserLogined} />
          <Cart/>
        </>
      ),
    },
    {
      path: "/Signup",
      element: (
        <>
          <MyNav userLogined={userLogined} setUserLogined={setUserLogined} />
          <SignUp />
        </>
      ),
    },
    {
      path: "/Profile",
      element: (
        <>
          <MyNav userLogined={userLogined} setUserLogined={setUserLogined}/>
          <ProtectedRoute redirectTo="/Login" userLogined={userLogined}>
            <Profile
              userLogined={userLogined}
              setUserLogined={setUserLogined}
            />
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