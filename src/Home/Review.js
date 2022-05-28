import React from "react";

const Review = ({ review }) => {
  return (
    <div>
      <div class="card lg:max-w-lg bg-base-100 shadow-xl mx-12 my-5">
        <div class="card-body items-center text-center">
          <h2 class="card-title">{review.name}</h2>
          <p>{review.description}</p>
          <p>Ratings: {review.ratings}</p>
          <div class="rating rating-lg">
            <input
              type="radio"
              name="rating-8"
              class="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-8"
              class="mask mask-star-2 bg-orange-400"
              checked
            />
            <input
              type="radio"
              name="rating-8"
              class="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-8"
              class="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-8"
              class="mask mask-star-2 bg-orange-400"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
