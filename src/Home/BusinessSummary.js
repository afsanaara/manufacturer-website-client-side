import React from "react";
import CountUp from "react-countup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCodeFork,
  faComment,
  faFlag,
  faPeopleLine,
} from "@fortawesome/free-solid-svg-icons";

const BusinessSummary = () => {
  return (
    <section class="my-20 w-full">
      <div>
        <h1 class="text-5xl font-bold text-center">
          {" "}
          <span class="text-primary">Our</span> Business{" "}
        </h1>
      </div>
      <div class="grid my-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div class=" flex-col">
          <div class="w-30 text-center  max-auto">
            <FontAwesomeIcon icon={faFlag} />
          </div>
          <div class="text-center font-bold mt-2">
            <p>Countries</p>
            <CountUp end={200} duration={2}></CountUp>
          </div>
        </div>

        <div class="flex-col">
          <div class="w-30 text-center  max-auto">
            <FontAwesomeIcon icon={faPeopleLine} />
          </div>
          <div class="text-center font-bold mt-2">
            <p>PROJECTS</p>
            <CountUp end={1500} duration={2}></CountUp>
          </div>
        </div>
        <div class=" flex-col">
          <div class="w-30 text-center  max-auto">
            <FontAwesomeIcon icon={faCodeFork} />
          </div>
          <div class="text-center font-bold mt-2">
            <p>CLIENTS</p>
            <CountUp end={2200} duration={2}></CountUp>
          </div>
        </div>
        <div class=" flex-col">
          <div class="w-30 text-center  max-auto">
            <FontAwesomeIcon icon={faComment} />
          </div>
          <div class="text-center font-bold mt-2">
            <p>FEEDBACKS</p>
            <CountUp end={12000} duration={2}></CountUp>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessSummary;
