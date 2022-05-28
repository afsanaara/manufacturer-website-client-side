import React, { useEffect, useState } from "react";

const UseUsers = (user) => {
  const [isUser, isSetUser] = useState(false);
  useEffect(() => {
    const email = user?.email;
    if (email) {
      fetch(`http://localhost:5000/user/${email}`, {
        method: "GET",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      })
        .then((response) => response.json())
        .then((data) => {
          isSetUser(data.user);
        });
    }
  }, [user]);
  return [isUser];
};

export default UseUsers;
