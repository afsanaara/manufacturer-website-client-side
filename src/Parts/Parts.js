import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import ShowParts from "./ShowParts";

const Parts = () => {
  const {
    data: parts,
    isLoading,
    refetch,
  } = useQuery("parts", () =>
    fetch("https://frozen-reef-84063.herokuapp.com/part", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div class="text-6xl font-bold text-center">
      <div>
        <h1>
          OUR <span class="text-primary">Products</span>
        </h1>
        <div class="grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 gap-5">
          {parts.map((part) => (
            <ShowParts key={part._id} part={part}></ShowParts>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Parts;
