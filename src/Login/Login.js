import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from ".././firebase.init";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Loading from "../Shared/Loading";
import { toast } from "react-toastify";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import useToken from "../Hooks/useToken";

const Login = () => {
  let location = useLocation();
  const navigate = useNavigate();
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, restPassError] =
    useSendPasswordResetEmail(auth);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [token] = useToken(user || googleUser);

  let from = location.state?.from?.pathname || "/";

  // if () {
  //   navigate(from, { replace: true });
  // }
  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [token, from, navigate]);

  if (loading || googleLoading) {
    return <Loading></Loading>;
  }

  let showError;
  if (error || googleError || restPassError) {
    showError = (
      <>
        <div>
          <p class="text-xl text-red-700">
            <small>{error?.message || googleError.massage}</small>
          </p>
        </div>
      </>
    );
  }

  const onSubmit = (data) => {
    console.log(data);
    signInWithEmailAndPassword(data.email, data.password);
    toast.success("Login successfully");
  };
  return (
    <div class="flex h-screen bg-base-100 justify-center items-center">
      <div class="card w-96  bg-base-100 shadow-xl">
        <h1 class="text-4xl text-success font-bold text-center mt-4">Login</h1>
        {/* <figure class="px-5 pt-5">
          <img
            src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-135.jpg?t=st=1653286621~exp=1653287221~hmac=64503d4ca106f5a72ef8b559e49b0350a6f4b88df19a62c9e5d7070ddcdaab33&w=740"
            alt="Shoes"
            class="rounded-xl w-60 bg-primary-content "
          />
        </figure> */}
        <div class="card-body  max-w-lg">
          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <span class="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  class="input input-bordered w-full max-w-xs"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Please enter your email address",
                    },
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: "Provide a valid Email",
                    },
                  })}
                />
                <label class="label">
                  {errors?.email?.type === "required" && (
                    <span className="text-red-700">{errors.email.message}</span>
                  )}
                  {errors?.email?.type === "pattern" && (
                    <span className="text-red-700">{errors.email.message}</span>
                  )}
                </label>
              </div>
              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <span class="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Type here"
                  class="input input-bordered w-full max-w-xs"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Please enter your password",
                    },
                    minLength: {
                      value: 6,
                      message: "Password should be 6 character long",
                    },
                  })}
                />
                <label class="label">
                  {errors?.password?.type === "required" && (
                    <span className="text-red-700">
                      {errors.password.message}
                    </span>
                  )}
                  {errors?.password?.type === "minLength" && (
                    <span className="text-red-700">
                      {errors.password.message}
                    </span>
                  )}
                </label>
              </div>
            </div>
            {showError}
            <div class="text-center mx-auto ">
              <input
                className="btn btn-success w-full max-w-xs text-white"
                type="submit"
                value="Login"
              />
            </div>
          </form>
          <p>
            <small>
              New to Ryans PC?{" "}
              <Link class="text-success font-bold" to="/register">
                Create a Account
              </Link>
            </small>
          </p>
          <div className="divider">OR</div>
          <button
            onClick={() => signInWithGoogle()}
            class="btn btn-outline btn-success"
          >
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
