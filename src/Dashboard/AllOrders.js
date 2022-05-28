import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import Order from "./Order";

const AllOrders = () => {
  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery("orders", () =>
    fetch("https://frozen-reef-84063.herokuapp.com/order", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h1>Total Orders {orders.length}</h1>

      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr class="text-black">
              <th>No</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Total Price</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <Order index={index} key={order._id} order={order}></Order>
            ))}
          </tbody>
        </table>
      </div>

      <div></div>
    </div>
  );
};

export default AllOrders;
