import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import auth from "../firebase.init";
import Loading from "../Shared/Loading";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Purchase = () => {
  const [user, loading, error] = useAuthState(auth);
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const {
    data: purchase,
    isLoading,
    refetch,
  } = useQuery(["purchase", id], () =>
    fetch(`http://localhost:5000/part/${id}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (loading) {
    return <Loading></Loading>;
  }
  const onSubmit = (data) => {
    console.log(data);

    const purchaseInfo = {
      email: data.email,
      name: data.name,
      location: data.location,
      phone: data.phone,
      productName: purchase.name,
      quantity: data.quantity,
      Totalprice: purchase.price * data.quantity,
    };
    fetch("http://localhost:5000/purchase", {
      method: "POST",
      body: JSON.stringify(purchaseInfo),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        toast.success("Confirmed Purchase");
        refetch();
      });
  };

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div class="text-center">
      <h1 class="text-4xl">
        Welcome <span class="text-success font-bold">{user.displayName}</span>{" "}
      </h1>
      <h1>Purchase for {id}</h1>
      <div class="hero min-h-screen bg-base-100">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <div class="text-center lg:text-center">
            <h1 class="text-5xl font-bold">{purchase.name}</h1>
            <figure>
              <img
                class="mx-auto"
                style={{ width: "150px" }}
                src={purchase.image}
                alt="Shoes"
              />
            </figure>
            <p class="py-6">{purchase.description}</p>
            <p class="font-bold">Price: ${purchase.price}</p>
            <p class="font-bold ">
              <span class="text-success">Available Quantity: </span>
              {purchase.availableQuantity}
            </p>
            <p class="font-bold">Minimum Quantity:{purchase.minimumQuantity}</p>
          </div>
          <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div class="card-body">
              <form action="" onSubmit={handleSubmit(onSubmit)}>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    placeholder="email"
                    disabled
                    class="input input-bordered"
                    {...register(
                      "email",
                      { value: `${user.email}` },
                      {
                        required: {
                          value: true,
                          message: "Please enter your name",
                        },
                      }
                    )}
                  />
                </div>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="name"
                    disabled
                    class="input input-bordered"
                    {...register(
                      "name",
                      { value: `${user.displayName}` },
                      {
                        required: {
                          value: true,
                          message: "Please enter your name",
                        },
                      }
                    )}
                  />
                </div>

                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Location</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Location"
                    class="input input-bordered"
                    {...register("location", {
                      required: {
                        value: true,
                        message: "Please enter your location",
                      },
                    })}
                  />
                  <label class="label">
                    {errors?.location?.type === "required" && (
                      <span className="text-red-700">
                        {errors?.location.message}
                      </span>
                    )}
                  </label>
                </div>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Phone Number</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Phone"
                    class="input input-bordered"
                    {...register("phone", {
                      required: {
                        value: true,
                        message: "Please enter your phone number",
                      },
                    })}
                  />
                  <label class="label">
                    {errors?.phone?.type === "required" && (
                      <span className="text-red-700">
                        {errors?.phone.message}
                      </span>
                    )}
                  </label>
                </div>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Quantity</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Quantity"
                    class="input input-bordered"
                    {...register("quantity", {
                      required: {
                        value: true,
                        message: "Please enter your quantity",
                      },
                      min: {
                        value: 2,
                        message: "Minimum order quantity is 2",
                      },
                      max: {
                        value: 100,
                        message: "You can't order more than 100", // JS only: <p>error message</p> TS only support string
                      },
                    })}
                  />
                  <label class="label">
                    {errors?.quantity?.type === "required" && (
                      <span className="text-red-700">
                        {errors?.quantity.message}
                      </span>
                    )}
                    {errors?.quantity?.type === "min" && (
                      <span className="text-red-700">
                        {errors.quantity.message}
                      </span>
                    )}
                    {errors?.quantity?.type === "max" && (
                      <span className="text-red-700">
                        {errors.quantity.message}
                      </span>
                    )}
                  </label>
                </div>
                <div class="text-center mx-auto ">
                  <input
                    className="btn btn-primary mt-5 w-full max-w-xs text-white"
                    type="submit"
                    disabled={
                      errors?.quantity?.type === "max" ||
                      errors?.quantity?.type === "min"
                    }
                    value="Confirm Purchase"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
