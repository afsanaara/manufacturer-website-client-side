import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import auth from "../firebase.init";
import Loading from "../Shared/Loading";

const MyPurchase = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate(auth);
  const {
    data: myPurchase,
    isLoading,
    refetch,
  } = useQuery(["myPurchase", user], () =>
    fetch(
      `https://frozen-reef-84063.herokuapp.com/purchase?email=${user?.email}`,
      {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    ).then((res) => {
      console.log(res);
      if (res.status === 401 || res.status === 403) {
        navigate("/");
        signOut(auth);
        localStorage.removeItem("accessToken");
      }
      return res.json();
    })
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <div>
        <div class="overflow-x-auto">
          <table class="table w-full bg-base-100">
            <thead>
              <tr class="text-black">
                <th></th>
                <th>Product Name</th>
                <th>Location</th>
                <th>Quantity</th>
                <th>Total Price</th>
                <th>Payment</th>
              </tr>
            </thead>
            <tbody>
              {myPurchase?.map((purchase, index) => (
                <tr>
                  <th>{index + 1}</th>
                  <td>{purchase.productName}</td>
                  <td>{purchase.location}</td>
                  <td>{purchase.quantity}</td>
                  <td>{purchase.Totalprice}</td>
                  <td>
                    {" "}
                    <Link to={`/dashboard/payment/${purchase._id}`}>
                      {" "}
                      <button class="btn btn-primary btn-xs"> PAY</button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyPurchase;
