import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const imageKey = "0f9321ee3bc068780e683ded6bbb90ac";

  const onSubmit = (data) => {
    console.log(data);

    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          const productInfo = {
            name: data.name,
            price: data.price,
            description: data.description,
            minimumQuantity: data.minimum,
            availableQuantity: data.available,
            image: img,
          };
          //send to database
          fetch("https://frozen-reef-84063.herokuapp.com/part", {
            method: "POST",
            body: JSON.stringify(productInfo),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          })
            .then((response) => response.json())
            .then((data) => {
              toast.success("Product added");
              console.log(data);
            });
        }
      });
  };
  return (
    <div>
      <h1>Add New Product</h1>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Product Name</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full max-w-xs"
            {...register("name", {
              required: {
                value: true,
                message: "Please enter product name",
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
            <span class="label-text">Price</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full max-w-xs"
            {...register("price", {
              required: {
                value: true,
                message: "Please enter price",
              },
            })}
          />
          <label class="label">
            {errors?.price?.type === "required" && (
              <span className="text-red-700">{errors.price.message}</span>
            )}
          </label>
        </div>
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Available Quantity</span>
          </label>
          <input
            type="number"
            placeholder="Type here"
            class="input input-bordered w-full max-w-xs"
            {...register("available", {
              required: {
                value: true,
                message: "Please enter available quantity",
              },
            })}
          />
          <label class="label">
            {errors?.available?.type === "required" && (
              <span className="text-red-700">{errors.available.message}</span>
            )}
          </label>
        </div>
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Minimum Quantity</span>
          </label>
          <input
            type="number"
            placeholder="Type here"
            class="input input-bordered w-full max-w-xs"
            {...register("minimum", {
              required: {
                value: true,
                message: "Please enter minimum quantity",
              },
            })}
          />
          <label class="label">
            {errors?.minimum?.type === "required" && (
              <span className="text-red-700">{errors.minimum.message}</span>
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
            placeholder="Your description"
            {...register("description", {
              required: {
                value: true,
                message: "Please enter your description",
              },
            })}
          ></textarea>
          <label class="label">
            {errors?.description?.type === "required" && (
              <span className="text-red-700">
                {errors?.description.message}
              </span>
            )}
          </label>
        </div>
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Upload Image</span>
          </label>
          <input
            type="file"
            placeholder="Type here"
            class="input input-bordered w-full max-w-xs"
            {...register("image", {
              required: {
                value: true,
                message: "Please upload image",
              },
            })}
          />
          <label class="label">
            {errors?.image?.type === "required" && (
              <span className="text-red-700">{errors.image.message}</span>
            )}
          </label>
        </div>
        <div>
          <input
            className="btn btn-primary mt-5 w-full max-w-xs text-white"
            type="submit"
            value="Add Product"
          />
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
