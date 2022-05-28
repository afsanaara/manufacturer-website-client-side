import React from "react";
import { toast } from "react-toastify";

const UsersRow = ({ user, index, refetch }) => {
  const makeAdmin = () => {
    fetch(`https://frozen-reef-84063.herokuapp.com/user/admin/${user.email}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        authorization: `Bearer ${localStorage.getItem("accessToken")} `,
      },
    })
      .then((response) => {
        if (response.status === 403) {
          toast.error("Unable to make admin");
        }
        return response.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          toast.success("Make admin successfully");
          console.log(data);
        }
      });
  };
  return (
    <tr>
      <th>{index}</th>
      <td>{user.email}</td>

      <td>
        {/* {user.role !== "admin" && (
          <button onClick={makeAdmin} class="btn btn-success btn-xs">
            Make Admin
          </button>
        )} */}
        {user.role === "admin" ? (
          <span className="text-primary font-bold">Admin</span>
        ) : (
          <button onClick={makeAdmin} class="btn btn-success btn-xs">
            Make Admin
          </button>
        )}
      </td>
      {/* <td>Red</td> */}
    </tr>
  );
};

export default UsersRow;
