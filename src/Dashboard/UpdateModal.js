import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import auth from "../firebase.init";
import Loading from "../Shared/Loading";

const UpdateModal = ({ profile, setUpdate, refetch }) => {
  const [user, loading, error] = useAuthState(auth);
  const email = user?.email;

  //   const [education, setEducation] = useState("");
  //   const [location, setLocation] = useState("");
  //   const [number, setNumber] = useState("");
  //   const [social, setSocial] = useState("");

  if (loading) {
    return <Loading></Loading>;
  }

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const education = event.target.education.value;
    const location = event.target.location.value;
    const phone = event.target.phone.value;
    const social = event.target.linkedin.value;

    const userInfo = { education, location, phone, social };
    fetch(`http://localhost:5000/profile/${email}`, {
      method: "PUT",
      body: JSON.stringify(userInfo),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        authorization: `Bearer ${localStorage.getItem("accessToken")} `,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          refetch();
          toast.success("data updated successfully");
          setUpdate(false);
          event.target.reset();
        }
      });
  };
  return (
    <div>
      <input type="checkbox" id="my-modal-6" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h1 class="text-3xl text-center text-pink-500 font-bold">
            Update Your Profile
          </h1>
          <form action="" onSubmit={handleOnSubmit}>
            <div class="form-control w-full max-w-lg">
              <label class="label">
                <span class="label-text">Education</span>
              </label>
              <input
                type="text"
                name="education"
                defaultValue={profile?.education}
                placeholder="Type here"
                class="input input-bordered w-full max-w-lg"
              />
              <label class="label">
                {/* <span class="label-text-alt">Alt label</span>
                <span class="label-text-alt">Alt label</span> */}
              </label>
            </div>
            <div class="form-control w-full max-w-lg">
              <label class="label">
                <span class="label-text">Location</span>
              </label>
              <input
                type="text"
                name="location"
                defaultValue={profile?.location}
                placeholder="Type here"
                class="input input-bordered w-full max-w-lg"
              />
              <label class="label">
                {/* <span class="label-text-alt">Alt label</span>
                <span class="label-text-alt">Alt label</span> */}
              </label>
            </div>
            <div class="form-control w-full max-w-lg">
              <label class="label">
                <span class="label-text">Phone Number</span>
              </label>
              <input
                type="text"
                name="phone"
                defaultValue={profile?.phone}
                placeholder="Type here"
                class="input input-bordered w-full max-w-lg"
              />
              <label class="label">
                {/* <span class="label-text-alt">Alt label</span>
                <span class="label-text-alt">Alt label</span> */}
              </label>
            </div>
            <div class="form-control w-full max-w-lg">
              <label class="label">
                <span class="label-text">LinkedIn</span>
              </label>
              <input
                type="text"
                name="linkedin"
                defaultValue={profile?.social}
                placeholder="Type here"
                class="input input-bordered w-full max-w-lg"
              />
              <label class="label">
                {/* <span class="label-text-alt">Alt label</span>
                <span class="label-text-alt">Alt label</span> */}
              </label>
            </div>
            <input
              type="submit"
              value="Save"
              class="btn btn-primary justify-center mx-w-lg"
            />
          </form>
          <div class="modal-action">
            <label for="my-modal-6" class="btn btn-error">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateModal;
