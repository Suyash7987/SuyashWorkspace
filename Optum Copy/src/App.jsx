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
import View from "./components/View";
import Cart from "./components/Cart";
import { useSelector, useDispatch } from "react-redux";
import { loginSuccess, logout } from "./components/authSlice";

function App() {
  
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated); // Get auth state from Redux
  const dispatch = useDispatch(); // Get dispatch function

  // Handle login success using Redux
  const handleLoginSuccess = () => {
    dispatch(loginSuccess()); // Update Redux store
  };

  const route = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <MyNav />
          <Home />
        </>
      ),
    },
    {
      path: "/About",
      element: (
        <>
          <MyNav />
          <About />
        </>
      ),
    },
    {
      path: "/Contact",
      element: (
        <>
          <MyNav />
          <Contact />
        </>
      ),
    },
    {
      path: "/Product",
      element: (
        <>
          <MyNav />
          <Product />
        </>
      ),
    },
    {
      path: "/View/:index",
      element: (
        <>
          <MyNav />
          <View />
        </>
      ),
    },
    {
      path: "/Login",
      element: (
        <>
          <MyNav />
          <Loading handleLoginSuccess={handleLoginSuccess} />
        </>
      ),
    },
    {
      path: "/Cart",
      element: (
        <>
          <MyNav />
          <Cart />
        </>
      ),
    },
    {
      path: "/Signup",
      element: (
        <>
          <MyNav />
          <SignUp />
        </>
      ),
    },
    {
      path: "/Profile",
      element: (
        <>
          <MyNav />
          <ProtectedRoute redirectTo="/Login" userLogined={isAuthenticated}>
            <Profile />
          </ProtectedRoute>
        </>
      ),
    },
  ]);

  return <RouterProvider router={route} />;
}

export default App;
