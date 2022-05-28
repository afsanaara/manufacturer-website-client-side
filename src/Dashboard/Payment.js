import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";
import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
const stripePromise = loadStripe(
  "pk_test_51L2HLGKsBsoEqRmE2AcZlZOr32JIWO1judrGQsDmDGct0KanbQnZkT1r1XB9WPEmlWBFklsOJprRN9YZkv448VTC00WwjihIEB"
);
const Payment = () => {
  const { id } = useParams();
  const {
    data: purchase,
    isLoading,
    refetch,
  } = useQuery("purchase", () =>
    fetch(`https://frozen-reef-84063.herokuapp.com/purchase/${id}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((response) => response.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h1 class="text-2xl text-neutral font-bold"> Payment ID : {id}</h1>
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">
            Payment for <span class="text-red-700">{purchase.productName}</span>{" "}
          </h2>
          <p>Quantity :{purchase.quantity}</p>
          <p>Total Price : $ {purchase.Totalprice}</p>
        </div>
      </div>
      <div class="card w-96 mt-5 bg-base-100 shadow-xl">
        <div class="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm purchase={purchase} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
