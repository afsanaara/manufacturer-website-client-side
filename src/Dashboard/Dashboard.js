import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink, Outlet } from "react-router-dom";
import auth from "../firebase.init";
import UseAdmin from "../Hooks/UseAdmin";
import UseUsers from "../Hooks/UseUsers";
import Loading from "../Shared/Loading";

const Dashboard = () => {
  const [user, loading] = useAuthState(auth);
  // const [isUser] = UseUsers(user);
  // const [admin] = UseAdmin(user);

  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <div class="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col">
          {/* <h1 class="text-center text-2xl text-success font-bold">
            Welcome to Dashboard {user.displayName}
          </h1> */}
          <Outlet />
        </div>
        <div class="drawer-side">
          <label for="my-drawer-2" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            {/* {isUser && ( */}
              <>
                <li>
                  <NavLink to="purchase">My Purchase</NavLink>
                </li>
                <li>
                  <NavLink to="profile">My Profile</NavLink>
                </li>
                <li>
                  <NavLink to="review">Add a Review</NavLink>
                </li>
              </>
            {/* )} */}

            {/* {admin && ( */}
              <>
                <li>
                  <NavLink to="profile">My Profile</NavLink>
                </li>
                <li>
                  <NavLink to="users">Make Admin</NavLink>
                </li>
                <li>
                  <NavLink to="order">Manage All Order</NavLink>
                </li>
                <li>
                  <NavLink to="product">Add Product</NavLink>
                </li>
                <li>
                  <NavLink to="inventory">Manage Products</NavLink>
                </li>
              </>
            {/* )} */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
