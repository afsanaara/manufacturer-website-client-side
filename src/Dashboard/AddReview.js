import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddReview = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    const reviewInfo = {
      name: data.name,
      ratings: data.ratings,
      description: data.review,
    };
    fetch("http://localhost:5000/review", {
      method: "POST",
      body: JSON.stringify(reviewInfo),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        toast.success("Review added successfully");
        console.log(data);
      });
  };

  return (
    <div>
      <h1 className="text-5xl text-indigo-400 font-bold my-5">Add a review</h1>

      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">What is your name?</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full max-w-xs"
            {...register("name", {
              required: {
                value: true,
                message: "Please enter your name",
              },
            })}
          />
          <label class="label">
            {errors?.name?.type === "required" && (
              <span className="text-red-700">{errors?.name.message}</span>
            )}
          </label>
        </div>

        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Ratings</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full max-w-xs"
            {...register("ratings", {
              required: {
                value: true,
                message: "Please enter your ratings",
              },
            })}
          />
          <label class="label">
            <span class="label-text-alt">Give us rating out of 5</span>
            {errors?.ratings?.type === "required" && (
              <span className="text-red-700">{errors?.ratings.message}</span>
            )}
          </label>
        </div>

        <div class="form-control lg:max-w-xs">
          <label class="label">
            <span class="label-text">Description</span>
          </label>
          <textarea
            type="text"
            class="textarea textarea-bordered h-24"
            placeholder="Your review"
            {...register("review", {
              required: {
                value: true,
                message: "Please enter your review",
              },
            })}
          ></textarea>
          <label class="label">
            {errors?.review?.type === "required" && (
              <span className="text-red-700">{errors?.review.message}</span>
            )}
          </label>
        </div>
        <div>
          <input
            className="btn btn-primary mt-5 w-full max-w-xs text-white"
            type="submit"
            value="Submit"
          />
        </div>
      </form>
    </div>
  );
};

export default AddReview;
