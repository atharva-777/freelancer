"use client";
import forTalentImg from "../assets/fortalent.jpg";
import { Card } from "flowbite-react";

function HorizontalCard() {
  return (
    <div className="flex justify-center mx-1">
      <Card horizontal>
        <div>
          <img
            className="rounded  h-[26vh] "
            src={forTalentImg}
            alt="forTalentImg"
          />
        </div>
      </Card>
    </div>
  );
}

function HorizontalCard2() {
  return (
    <div className="flex justify-center mx-2">
      <Card horizontal>
        <div className="bg-gray-700 rounded-lg rounded-b-lg lg:rounded-r-lg">
          <h2 className="text-white text-2xl lg:text-3xl text-left mx-5 my-5">
            For talent
          </h2>
          <h1 className="text-white text-4xl lg:text-6xl    text-left mx-5 my-10 font-semibold font-serif border-solid tracking-normal">
            Find
            <br />
            great work
          </h1>
          <p className="text-white font-mono text-lg lg:text-xl font-medium my-40 text-left mx-5">
            Meet clients you’re excited to work with and take
            <br /> your career or business to new heights.
          </p>
          <hr className="bg-white h-px w-11/12 m-auto" />
          <div className="flex justify-start">
            <button className="bg-white text-gray-700 hover:bg-white-200 mx-10 my-6 py-2 px-4 rounded-full">
              Find Opportunity
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
}

export { HorizontalCard, HorizontalCard2 };
