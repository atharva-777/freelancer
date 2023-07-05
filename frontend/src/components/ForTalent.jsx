// import React from "react";
// import forTalentImg from "../assets/fortalent.jpg";

// function ForTalent() {
//   return (
//     <div>
//       <div className="drop-shadow-2xl flex sm:flex-row
//       flex-col m-10 mx-20 p-10 justify-center ">
//         <img
//           className=" rounded-t-lg  md:rounded-l-lg"
//           src={forTalentImg}
//           alt="forTalentImg"
//         />
//         <div className="bg-blue-500 rounded-b-lg  md:rounded-r-lg ">
//           <h2 className=" text-white text-2xl text-left mx-5 my-5">
//             For talent
//           </h2>
//           <h1 className=" text-white text-left mx-5 my-10 font-semibold  font-serif border-solid tracking-normal  md:text-6xl">
//             Find
//             <br />
//             greatwork
//           </h1>
//           <p className="text-white font-mono  font-medium text-xl my-40 text-left mx-5 ">
//             Meet clients you’re excited to work with and take
//             <br /> your career or business to new heights.
//           </p>
//           <hr className="bg-white h-px w-11/12 m-auto" />
//           <div className="flex justify-start">
//             <button className="bg-white mx-10 text-blue-500 hover:bg-white-200 mx-l-0 my-6 py-2 px-4 rounded-full">
//               Find Opportunity
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ForTalent;



import React from "react";
import forTalentImg from "../assets/fortalent.jpg";

function ForTalent() {
  return (
    <div>
      <div className="drop-shadow-2xl flex lg:flex-row flex-col m-10 mx-14 p-10 justify-center">
        <img
          className="rounded-t-lg lg:rounded-l-lg"
          src={forTalentImg}
          alt="forTalentImg"
        />
        <div className="bg-gray-700 rounded-b-lg lg:rounded-r-lg">
          <h2 className="text-white text-2xl lg:text-3xl text-left mx-5 my-5">
            For talent
          </h2>
          <h1 className="text-white text-4xl lg:text-6xl text-left mx-5 my-10 font-semibold font-serif border-solid tracking-normal">
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
      </div>
    </div>
  );
}

export default ForTalent;

