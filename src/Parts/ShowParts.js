import React from 'react'
import { Link } from "react-router-dom";

const ShowParts=({part})=> {
    const {
        _id,
        image,
        price,
        description,
        name,
        minimumQuantity,
        availableQuantity,
      } = part;
    return (
        <div>
            <div class="card lg:max-w-lg bg-base-100 shadow-xl mx-12 my-5">
        <figure>
          <img style={{ width: "150px" }} src={image} alt="Shoes" />
        </figure>
        <div class="card-body h-auto items-center text-center">
          <h2 class="card-title">{name}</h2>
          <h2 class="card-title text-xs">{description}</h2>
          <h2 class=" card-title text-sm">Price: {price}</h2>
          <h2 class=" card-title text-sm">
            Minimum Quantity: {minimumQuantity}
          </h2>
          <h2 class=" card-title text-sm">
            Available Quantity: {availableQuantity}
          </h2>
          <div class="card-actions justify-end">
            <button>
              <Link to={`/purchase/${_id}`} class="btn btn-primary">
                PURCHASE
              </Link>
            </button>
          </div>
        </div>
      </div>
        </div>
    )
}

export default ShowParts
