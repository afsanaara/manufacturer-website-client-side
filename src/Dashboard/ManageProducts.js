import React, { useState } from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Loading from "../Shared/Loading";
import DeleteModal from "./DeleteModal";

const ManageProducts = () => {
  const [deleteModal, setDeleteModal] = useState(null);
  const {
    data: parts,
    isLoading,
    refetch,
  } = useQuery("parts", () =>
    fetch("http://localhost:5000/part", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }

  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/part/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          refetch();
          toast.success("Deleted");
          setDeleteModal(null);
        }
      });
  };
  return (
    <div>
      <h1>Number of products {parts.length}</h1>

      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr class="text-white">
              <th>No</th>
              <th>Name</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>Remove </th>
            </tr>
          </thead>
          <tbody>
            {parts.map((part, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{part.name}</td>
                <td>{part.price}</td>
                <td>{part.availableQuantity}</td>
                <td>
                  <label
                    onClick={() => setDeleteModal(part)}
                    for="my-modal-6"
                    class="btn btn-xs btn-error"
                  >
                    Remove
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {deleteModal && (
          <DeleteModal
            deleteModal={deleteModal}
            handleDelete={handleDelete}
          ></DeleteModal>
        )}
      </div>
    </div>
  );
};

export default ManageProducts;
