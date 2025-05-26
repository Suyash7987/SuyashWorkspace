import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"; // Import Redux hooks
import { logout } from "./authSlice"; // Import logout action
import "./MyNav.css";

function MyNavbar() {
  const [Hamburger, setHamburger] = useState(false);
  const navigate = useNavigate();
  const [Eye, setEye] = useState(true);

  // Get authentication state from Redux
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch(); // Get dispatch function

  function eyeHover() {
    setEye(!Eye);
  }

  function handleHamburger() {
    setHamburger(!Hamburger);
  }

  function handleLogo() {
    navigate("/");
  }

  function handleLogout() {
    dispatch(logout()); // Dispatch logout action
    navigate("/Login"); // Redirect to login page after logout
  }

  return (
    <>
      <div id="Nav">
        <div id="nav1">
          <h1 style={{ cursor: "pointer" }} onClick={handleLogo}>
            OPTUM
          </h1>
          <i
            onMouseEnter={eyeHover}
            onMouseOut={eyeHover}
            className={Eye ? "ri-eye-close-fill" : "ri-eye-line"}
          ></i>
        </div>
        <div id="nav2">
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/About"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                About us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Contact"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                Contact us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Product"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                Products
              </NavLink>
            </li>

            {isAuthenticated ? (
              <>
                <li>
                  <NavLink
                    to="/Profile"
                    className={({ isActive }) =>
                      isActive ? "active-link" : ""
                    }
                  >
                    Profile
                  </NavLink>
                </li>
                <li>
                  <button id="LogoutButton" onClick={handleLogout} className="logout-btn">
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <li>
                <NavLink
                  to="/Login"
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                >
                  Login
                </NavLink>
              </li>
            )}

            <li>
              <NavLink
                to="/Cart"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                <i className="ri-shopping-cart-2-line"></i>
              </NavLink>
            </li>
          </ul>

          {Hamburger && (
            <div id="icons">
              <div id="icon-upper">
                <i
                  onMouseEnter={handleHamburger}
                  onMouseOut={handleHamburger}
                  id="hamburger2"
                  className="ri-menu-5-line"
                ></i>
              </div>
              <div id="icon-lower">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? "active-link" : ""
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/About"
                    className={({ isActive }) =>
                      isActive ? "active-link" : ""
                    }
                  >
                    About us
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/Contact"
                    className={({ isActive }) =>
                      isActive ? "active-link" : ""
                    }
                  >
                    Contact
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/Product"
                    className={({ isActive }) =>
                      isActive ? "active-link" : ""
                    }
                  >
                    Products
                  </NavLink>
                </li>
                

                {isAuthenticated ? (
                  <>
                    <li>
                      <NavLink
                        to="/Profile"
                        className={({ isActive }) =>
                          isActive ? "active-link" : ""
                        }
                      >
                        Profile
                      </NavLink>
                    </li>
                    <li>
                      <button onClick={handleLogout} className="logout-btn">
                        Logout
                      </button>
                    </li>
                  </>
                ) : (
                  <li>
                    <NavLink
                      to="/Login"
                      className={({ isActive }) =>
                        isActive ? "active-link" : ""
                      }
                    >
                      Login
                    </NavLink>
                  </li>
                  
                )}
                 <li>
              <NavLink
                to="/Cart"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                <i className="ri-shopping-cart-2-line"></i>
              </NavLink>
            </li>
              </div>
            </div>
          )}

          <i
            onClick={handleHamburger}
            id="hamburger"
            className="ri-menu-5-line"
          ></i>
        </div>
      </div>
    </>
  );
}

export default MyNavbar;
