import React from "react";
import TreeBG from "../../assets/TreeBG.png";
import NavBar from "./NavBar.jsx";

function PlantersHome() {
  return (
    <section className="relative bg-white lg:h-screen flex flex-col">
      {/* <img
        className="absolute inset-0 object-[75%] sm:object-[25%] object-cover w-full h-full sm:opacity-100"
        src={TreeBG}
        alt="Page background with Trees"
      /> */}
      <div className="rect" />
      <NavBar />
      <div className="relative flex flex-wrap flex-grow items-center justify-center ">
        <div className="container  mx-6 my-3 flex  flex-wrap items-center justify-between max-w-screen-xl px-2 py-2 ml-12 lg:h-full  lg:items-center lg:flex text-zinc-800">
          <div className="max-w-5/9 text-left sm:text-left darkgreen">
            <h1 className="text-6xl  sm:(text-7xl !leading-tight) font-normal capitalize">
              Planters complete tree-planting tasks & get Paid.
            </h1>

            <p className="max-w-8/10 mt-6 sm:leading-relaxed sm:text-xl">
              Our platform offers easy-to-implement technology, information, and
              tips on planting.
            </p>

            <div className="flex flex-wrap gap-4 mt-10 text-center">
              <a
                className="block w-1/2 px-25 py-5 text-sm font-snormal bg-lgreen rounded-lg shadow text-white sm:w-auto hover:text-white hover:bg-green-900 hover:border-white hover:border-2 active:text-rose-500 focus:outline-none focus:ring animate-bounce"
                href="/about"
              >
                Plant now
              </a>
            </div>
          </div>
          <img
            src="/assets/t1.png"
            alt="Tree illustration"
            width={350}
            height={500}
            // loading="lazy"
            className="mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
export default PlantersHome;