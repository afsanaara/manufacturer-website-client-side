import React from "react";

const Order = ({ order, index }) => {
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{order.productName}</td>
      <td>{order.quantity}</td>
      <td>{order.Totalprice}</td>
    </tr>
  );
};

export default Order;
