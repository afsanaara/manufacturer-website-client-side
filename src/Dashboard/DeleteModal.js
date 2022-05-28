import React from "react";

const DeleteModal = ({ deleteModal, handleDelete }) => {
  console.log(deleteModal);
  return (
    <div>
      <input type="checkbox" id="my-modal-6" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg text-red-700">
            Are you sure you want to delete?
          </h3>
          {/* <p class="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p> */}

          <div class="modal-action">
            <label
              onClick={() => handleDelete(deleteModal._id)}
              for="my-modal-6"
              class="btn btn-error"
            >
              DELETE
            </label>
            <label for="my-modal-6" class="btn">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
