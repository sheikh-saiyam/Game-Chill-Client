import { useContext, useState } from "react";
import { BiLogOut } from "react-icons/bi";
import { FaBars } from "react-icons/fa";
import { IoClose, IoHomeOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { AuthContext } from "../../Providers/AuthProvider";
const Navbar = () => {
  const { user, logOut, loading } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <div>
      <div className="bg-bgPrimary py-4">
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
                        ? "font-bold underline underline-offset-1 text-primary flex gap-1 items-center py-1 px-2 rounded-xl"
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
                        ? "font-bold underline underline-offset-1 text-primary flex gap-1 items-center py-1 px-2 rounded-xl"
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
                            ? "font-bold underline underline-offset-1 text-primary flex gap-1 items-center py-1 px-2 rounded-xl"
                            : "flex gap-1 items-center"
                        }
                      >
                        Add Review
                      </NavLink>
                      <NavLink
                        to={"/my-reviews"}
                        className={({ isActive }) =>
                          isActive
                            ? "font-bold underline underline-offset-1 text-primary flex gap-1 items-center py-1 px-2 rounded-xl"
                            : "flex gap-1 items-center"
                        }
                      >
                        My Reviews
                      </NavLink>
                      <NavLink
                        to={"/game-watchList"}
                        className={({ isActive }) =>
                          isActive
                            ? "font-bold underline underline-offset-1 text-primary flex gap-1 items-center py-1 px-2 rounded-xl"
                            : "flex gap-1 items-center"
                        }
                      >
                        Game WatchList
                      </NavLink>
                    </>
                  )}
                  {/* private routes */}
                </ul>
              )}
            </div>
            <Link>
              <img className="w-full h-20 md:w-40 " src={logo} alt="" />
            </Link>
          </div>
          <div className="navbar-center hidden xl:flex">
            <ul className="menu menu-horizontal space-x-8 text-lg flex items-center animate__animated animate__bounceInDown">
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive
                    ? "font-bold underline underline-offset-1 text-primary flex gap-1 items-center py-1 px-2 rounded-xl"
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
                    ? "font-bold underline underline-offset-1 text-primary flex gap-1 items-center py-1 px-2 rounded-xl"
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
                        ? "font-bold underline underline-offset-1 text-primary flex gap-1 items-center py-1 px-2 rounded-xl"
                        : "flex gap-1 items-center"
                    }
                  >
                    Add Review
                  </NavLink>
                  <NavLink
                    to={"/my-reviews"}
                    className={({ isActive }) =>
                      isActive
                        ? "font-bold underline underline-offset-1 text-primary flex gap-1 items-center py-1 px-2 rounded-xl"
                        : "flex gap-1 items-center"
                    }
                  >
                    My Reviews
                  </NavLink>
                  <NavLink
                    to={"/game-watchList"}
                    className={({ isActive }) =>
                      isActive
                        ? "font-bold underline underline-offset-1 text-primary flex gap-1 items-center py-1 px-2 rounded-xl"
                        : "flex gap-1 items-center"
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
                  className="btn bg-primary font-semibold text-lg text-white px-8
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
                    className="btn bg-primary font-semibold text-lg text-white px-8"
                  >
                    Login
                  </Link>
                  <Link
                    to={"/register"}
                    className="btn bg-primary font-semibold text-lg text-white hidden md:flex"
                  >
                    Registration
                  </Link>
                </>
              )}
              {/* conditional login/register/logout btn */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
