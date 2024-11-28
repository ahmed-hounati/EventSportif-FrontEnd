import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="text-white p-8">
      <div className="text-center">
        <h1 className="text-3xl ">Find your Sports Events</h1>
      </div>
      <div className="p-8 flex flex-row items-center justify-evenly">
        <div className="w-1/2 h-1/3 p-8">
          <img src="/homepg.png" alt="home" className="rounded-xl" />
        </div>
        <div className="w-[500px] text-center p-8">
          <h3 className="text-lg">
            From Local Matches to Global Arenas – We’ve Got You Covered.
          </h3>
          <h3 className="text-lg">Celebrate the Spirit of Sports Together!</h3>
          <h3 className="text-lg">
            Discover Events Near You – Dive Into the Action!
          </h3>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <button className="bg-[#00b140] px-3 py-3 rounded-lg">
          <Link to={"/login"}>Login</Link>
        </button>
      </div>
    </section>
  );
}
