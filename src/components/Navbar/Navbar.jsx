import React, { useContext, useState } from "react";
import { BiLogOut } from "react-icons/bi";
import { FaBars } from "react-icons/fa";
import { IoClose, IoHomeOutline } from "react-icons/io5";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import { AuthContext } from "../../Providers/AuthProvider";
const Navbar = () => {
  const { user, logOut, loading } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const location = useLocation();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const handleThemeToggle = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };
  React.useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div>
      <div
        className={
          location.pathname === "/"
            ? "dark:bg-[#535354] py-4 bg-bgPrimary"
            : "bg-bgPrimary py-4"
        }
      >
        <div className="navbar gap-6 w-11/12 mx-auto md:w-10/12 max-w-screen-2xl">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                onClick={toggleMenu}
                className="btn border-primary border-2 bg-transparent mr-3 xl:hidden text-primary"
              >
                {isOpen ? (
                  <IoClose className="text-2xl" />
                ) : (
                  <FaBars className="text-2xl"></FaBars>
                )}
              </div>
              {isOpen && (
                <ul
                  tabIndex={0}
                  className="animate__animated animate__bounceInDown menu w-max dropdown-content bg-base-100 rounded-box z-50 mt-4 p-4 border-2 border-primary space-y-3"
                >
                  <NavLink
                    to={"/"}
                    className={({ isActive }) =>
                      isActive
                        ? "font-bold underline underline-offset-1 text-primary flex gap-1 items-center rounded-xl border-accent border bg-bgPrimary p-2"
                        : "flex gap-1 items-center"
                    }
                  >
                    <IoHomeOutline />
                    Home
                  </NavLink>
                  <NavLink
                    to={"/reviews"}
                    className={({ isActive }) =>
                      isActive
                        ? "font-bold underline underline-offset-1 text-primary flex gap-1 items-center rounded-xl  border-accent border bg-bgPrimary p-2"
                        : "flex gap-1 items-center"
                    }
                  >
                    All Reviews
                  </NavLink>
                  {/* private routes */}
                  {user && user.email && (
                    <>
                      <NavLink
                        to={"/add-review"}
                        className={({ isActive }) =>
                          isActive
                            ? "font-bold underline underline-offset-1 text-primary flex gap-1 items-center rounded-xl border-accent border bg-bgPrimary p-2"
                            : "flex gap-1 items-center"
                        }
                      >
                        Add Review
                      </NavLink>
                      <NavLink
                        to={"/my-reviews"}
                        className={({ isActive }) =>
                          isActive
                            ? "font-bold underline underline-offset-1 text-primary flex gap-1 items-center rounded-xl border-accent border bg-bgPrimary p-2"
                            : "flex gap-1 items-center"
                        }
                      >
                        My Reviews
                      </NavLink>
                      <NavLink
                        to={"/game-watchList"}
                        className={({ isActive }) =>
                          isActive
                            ? "font-bold underline underline-offset-1 text-primary flex gap-1 items-center rounded-xl border-accent border bg-bgPrimary p-2"
                            : "flex gap-1 items-center"
                        }
                      >
                        Game WatchList
                      </NavLink>
                    </>
                  )}
                  {/* private routes */}

                  {user && user?.email && user?.photoURL ? (
                    <div className="md:flex gap-2 items-center">
                      <div className="flex flex-col space-y-2 justify-center">
                        <div className="m-1">
                          <img
                            className="w-10 h-10 rounded-full mx-auto"
                            src={user?.photoURL}
                            alt="user"
                          />
                        </div>
                        <div>
                          <h1 className="text-center font-semibold">
                            {user.email}
                          </h1>
                        </div>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}

                  {user && user.email ? (
                    <button
                      onClick={logOut}
                      className="btn bg-primary font-semibold text-lg text-white px-8
                    items-center gap-2 flex"
                    >
                      <BiLogOut />
                      Log Out
                    </button>
                  ) : (
                    <Link
                      to={"/register"}
                      className="btn bg-primary font-semibold text-lg text-white"
                    >
                      Registration
                    </Link>
                  )}
                </ul>
              )}
            </div>
            <Link>
              <img className="w-full h-20 md:w-40" src={logo} alt="" />
            </Link>
          </div>
          <div className="navbar-center hidden xl:flex">
            <ul className="menu menu-horizontal space-x-8 text-lg flex items-center animate__animated animate__bounceInDown">
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive
                    ? "font-bold underline underline-offset-1 text-primary flex gap-1 items-center py-1 px-2 rounded-xl"
                    : "flex gap-1 items-center hover:text-primary"
                }
              >
                <IoHomeOutline />
                Home
              </NavLink>
              <NavLink
                to={"/reviews"}
                className={({ isActive }) =>
                  isActive
                    ? "font-bold underline underline-offset-1 text-primary flex gap-1 items-center py-1 px-2 rounded-xl"
                    : "flex gap-1 items-center hover:text-primary"
                }
              >
                All Reviews
              </NavLink>
              {/* private routes */}
              {user && user.email && (
                <>
                  <NavLink
                    to={"/add-review"}
                    className={({ isActive }) =>
                      isActive
                        ? "font-bold underline underline-offset-1 text-primary flex gap-1 items-center py-1 px-2 rounded-xl"
                        : "flex gap-1 items-center hover:text-primary"
                    }
                  >
                    Add Review
                  </NavLink>
                  <NavLink
                    to={"/my-reviews"}
                    className={({ isActive }) =>
                      isActive
                        ? "font-bold underline underline-offset-1 text-primary flex gap-1 items-center py-1 px-2 rounded-xl"
                        : "flex gap-1 items-center hover:text-primary"
                    }
                  >
                    My Reviews
                  </NavLink>
                  <NavLink
                    to={"/game-watchList"}
                    className={({ isActive }) =>
                      isActive
                        ? "font-bold underline underline-offset-1 text-primary flex gap-1 items-center py-1 px-2 rounded-xl"
                        : "flex gap-1 items-center hover:text-primary"
                    }
                  >
                    Game WatchList
                  </NavLink>
                </>
              )}
              {/* private routes */}
            </ul>
          </div>
          <div className="navbar-end ">
            <div className="flex items-center gap-3">
              {/* conditional // userPhoto and Name */}
              {user && user?.email && user?.photoURL ? (
                <div className="md:flex gap-2 items-center hidden xl:flex">
                  <div className="dropdown dropdown-hover dropdown-end">
                    <div tabIndex={0} role="button" className="m-1 w-full">
                      <img
                        className="w-10 h-10 rounded-full"
                        src={user?.photoURL}
                        alt="user"
                      />
                    </div>
                    <ul
                      tabIndex={0}
                      className="dropdown-content menu bg-base-100 rounded-box z-[1] w-max p-2 shadow"
                    >
                      <div>
                        <img
                          className="mx-auto w-20 h-20 rounded-full my-4"
                          src={user.photoURL}
                          alt=""
                        />
                      </div>
                      <li>
                        <a className="font-semibold">
                          Name: {user.displayName}
                        </a>
                      </li>
                      <li>
                        <a className="font-semibold">Email: {user.email}</a>
                      </li>
                    </ul>
                  </div>
                </div>
              ) : (
                ""
              )}
              {/* conditional // userPhoto and Name */}

              {/* conditional login/register/logout btn */}
              {user && user.email ? (
                <button
                  onClick={logOut}
                  className="btn dark:bg-darkAccent dark:border-none bg-primary font-semibold text-lg text-white px-8
                 items-center gap-2 hidden md:flex"
                >
                  <BiLogOut />
                  Log Out
                </button>
              ) : loading ? (
                <span className="hidden xl:block loading loading-bars loading-lg text-primary"></span>
              ) : (
                <>
                  <Link
                    to={"/login"}
                    className="btn dark:bg-darkAccent dark:border-none bg-primary font-semibold text-lg text-white px-8"
                  >
                    Login
                  </Link>
                  <Link
                    to={"/register"}
                    className="btn dark:bg-darkAccent dark:border-none bg-primary font-semibold text-lg text-white hidden md:flex"
                  >
                    Registration
                  </Link>
                </>
              )}
              {/* conditional login/register/logout btn */}
              {location.pathname === "/" ? (
                <label className="swap swap-rotate cursor-pointer">
                  {/* Hidden checkbox to control theme state */}
                  <input
                    type="checkbox"
                    className="hidden theme-controller"
                    checked={isDarkMode}
                    onChange={handleThemeToggle}
                  />

                  {/* Sun icon for light mode */}
                  <svg
                    className="swap-off h-8 w-8 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                  </svg>

                  {/* Moon icon for dark mode */}
                  <svg
                    className="swap-on h-8 w-8 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                  </svg>
                </label>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
