import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./components/Contact";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Home from "./components/Home";
import MyNav from "./components/MyNav";
import About from "./components/About";

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <>
      <MyNav />
      <Home />
    </>,
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
      path: "/Dashboard",
      element: (
        <>
          <MyNav />
          <Dashboard />
        </>
      ),
    },
    {
      path: "/Login",
      element: (
        <>
          <MyNav />
          <Login />
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
