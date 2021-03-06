import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import UsersRow from "./UsersRow";

const Users = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch("https://frozen-reef-84063.herokuapp.com/user", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  console.log(users);
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h1>Total users {users.length}</h1>

      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead class="text-black">
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
             
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <UsersRow
                index
                refetch={refetch}
                key={user._id}
                user={user}
              ></UsersRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
