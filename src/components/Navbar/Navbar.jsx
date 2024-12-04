import { useState } from "react";
import { BiLogOut } from "react-icons/bi";
import { FaBars } from "react-icons/fa";
import { IoClose, IoHomeOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <div>
      <div className="bg-bgPrimary py-4">
        <div className="navbar gap-8 w-11/12 mx-auto md:w-10/12 max-w-screen-2xl">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                onClick={toggleMenu}
                className="btn border-primary border-2 bg-transparent mr-3 lg:hidden text-primary"
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
                    key="home"
                    className={({ isActive }) =>
                      isActive
                        ? "font-bold underline underline-offset-1 text-primary flex gap-1 items-center py-1 px-2 border-primary border rounded-xl"
                        : "flex gap-1 items-center"
                    }
                  >
                    <IoHomeOutline />
                    Home
                  </NavLink>

                  <NavLink
                    to={"/reviews"}
                    key="reviews"
                    className={({ isActive }) =>
                      isActive
                        ? "font-bold underline underline-offset-1 text-primary flex gap-1 items-center py-1 px-2 border-primary border rounded-xl"
                        : "flex gap-1 items-center"
                    }
                  >
                    reviews
                  </NavLink>

                  {/* {user && user.email && (
                    <NavLink
                      to={"/profile"}
                      key="profile"
                      className={({ isActive }) =>
                        isActive
                          ? "font-bold underline underline-offset-1 text-primary flex gap-1 items-center py-1 px-2 border-primary border rounded-xl"
                          : "flex gap-1 items-center"
                      }
                    >
                      <CgProfile />
                      My Profile
                    </NavLink>
                  )} */}

                  {/* {user && user?.email && user?.photoURL ? (
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
                  )} */}
                  {/* {user && user.email ? (
                    <button
                    //   onClick={logOut}
                      className="btn bg-primary font-semibold text-lg text-white px-8
                    items-center gap-2 flex"
                    >
                      <BiLogOut />
                      Log Out
                    </button>
                  ) : (
                    <Link
                      to={"/"}
                      className="btn bg-primary font-semibold text-lg text-white"
                    >
                      Registration
                    </Link>
                  )} */}
                </ul>
              )}
            </div>
            <Link>
              <img className="w-full h-20 md:w-52 " src={logo} alt="" />
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal space-x-10 text-lg  flex items-center animate__animated animate__bounceInDown">
              <NavLink
                to={"/"}
                key="home"
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
                key="reviews"
                className={({ isActive }) =>
                  isActive
                    ? "font-bold underline underline-offset-1 text-primary flex gap-1 items-center py-1 px-2 rounded-xl"
                    : "flex gap-1 items-center"
                }
              >
                Reviews
              </NavLink>

              <a
                className={({ isActive }) =>
                  isActive
                    ? "font-bold underline underline-offset-1 text-primary flex gap-1 items-center py-1 px-2 rounded-xl"
                    : "flex gap-1 items-center"
                }
              >
                About Us
              </a>

              {/* {user && user.email && (
                <NavLink
                  to={"/profile"}
                  key="profile"
                  className={({ isActive }) =>
                    isActive
                      ? "font-bold underline underline-offset-1 text-primary flex gap-1 items-center py-1 px-2 border-primary border rounded-xl"
                      : "flex gap-1 items-center"
                  }
                >
                  <CgProfile />
                  My Profile
                </NavLink>
              )} */}
            </ul>
          </div>
          <div className="navbar-end ">
            <div className="flex items-center gap-3">
              {/* {user && user?.email && user?.photoURL ? (
                <div className="md:flex gap-2 items-center hidden lg:flex">
                  <div className="dropdown dropdown-hover dropdown-end">
                    <div tabIndex={0} role="button" className="m-1">
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
              )} */}

              {/* {user && user.email ? (
                <button
                  onClick={logOut}
                  className="btn bg-primary font-semibold text-lg text-white px-8
                 items-center gap-2 hidden md:flex"
                >
                  <BiLogOut />
                  Log Out
                </button>
              ) : loading ? (
                <span className="hidden lg:block loading loading-bars loading-lg text-primary"></span>
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
              )} */}
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
