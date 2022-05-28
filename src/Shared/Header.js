import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../firebase.init";
import Loading from "./Loading";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return <Loading></Loading>;
  }

  const logout = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
    toast.success("User logged out");
  };

  return (
    <div>
      <div class="navbar bg-base-100 px-12">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to="/home">Home</NavLink>
              </li>
              <li>
                <NavLink to="/portfolio">My Portfolio</NavLink>
              </li>
              <li>
                <NavLink to="/blogs">Blogs</NavLink>
              </li>

              {user && (
                <li>
                  <NavLink to="/dashboard/purchase">Dashboard</NavLink>
                </li>
              )}

              {user && (
                <li>
                  <NavLink to="/">{user?.displayName}</NavLink>
                </li>
              )}

              {user ? (
                <>
                  <button onClick={logout} class="btn btn-ghost">
                    Logout
                  </button>
                </>
              ) : (
                <li>
                  <NavLink to="/login">Login</NavLink>
                </li>
              )}
            </ul>
          </div>
          <Link to="/" class="btn btn-ghost normal-case text-xl">
            Ryans PC
          </Link>
        </div>
        <div class="navbar-end hidden lg:flex">
          <ul class="menu  menu-horizontal p-0">
            <li>
              <NavLink to="/home">Home</NavLink>
            </li>
            <li>
              <NavLink to="/portfolio">My Portfolio</NavLink>
            </li>
            <li>
              <NavLink to="/blogs">Blogs</NavLink>
            </li>

            {user && (
              <li>
                <NavLink to="/dashboard/purchase">Dashboard</NavLink>
              </li>
            )}

            {user && (
              <li>
                <NavLink to="/">{user.displayName}</NavLink>
              </li>
            )}

            {user ? (
              <button onClick={logout} class="btn btn-ghost">
                Logout
              </button>
            ) : (
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
            )}
          </ul>
        </div>
        <div className="navbar-end">
          <label tabindex="0" for="my-drawer-2" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Header;
