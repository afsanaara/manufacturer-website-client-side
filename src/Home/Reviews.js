import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import Review from "./Review";

const Reviews = () => {
  const {
    data: reviews,
    isLoading,
    refetch,
  } = useQuery("reviews", () =>
    fetch("https://frozen-reef-84063.herokuapp.com/review").then((res) =>
      res.json()
    )
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="my-20">
      <h1 className="text-6xl text-center font-bold my-10">
        OUR CUSTOMER <span className="text-primary">REVIEWS</span>{" "}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-12">
        {reviews.map((review) => (
          <Review key={review._id} review={review}></Review>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
