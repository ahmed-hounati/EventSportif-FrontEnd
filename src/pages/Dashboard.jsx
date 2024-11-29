import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Dashboard() {
  return (
    <section className="text-white">
      <h1 className="text-3xl text-center font-bold pt-10">Dashboard</h1>
      <div className="flex flex-col md:flex-row items-center justify-center py-10 gap-10 md:gap-20 pt-[100px]">
        <Link to={"/participants"}>
          <div className="w-[250px] sm:w-[300px] h-[250px] sm:h-[300px] bg-slate-700 flex flex-col gap-7 items-center justify-center rounded-xl transition-transform duration-500 hover:scale-105 hover:-translate-y-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="120"
              width="120"
              viewBox="0 0 448 512"
              className="w-24 h-24 md:w-36 md:h-36"
            >
              <path
                fill="#00b140"
                d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"
              />
            </svg>
            <p className="text-2xl">Participants</p>
          </div>
        </Link>
        <Link to={"/events"}>
          <div className="w-[250px] sm:w-[300px] h-[250px] sm:h-[300px] bg-slate-700 flex flex-col gap-7 items-center justify-center rounded-xl transition-transform duration-500 hover:scale-105 hover:-translate-y-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="120"
              width="120"
              viewBox="0 0 448 512"
              className="w-24 h-24 md:w-36 md:h-36"
            >
              <path
                fill="#00b140"
                d="M128 0c17.7 0 32 14.3 32 32l0 32 128 0 0-32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32 48 0c26.5 0 48 21.5 48 48l0 48L0 160l0-48C0 85.5 21.5 64 48 64l48 0 0-32c0-17.7 14.3-32 32-32zM0 192l448 0 0 272c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 192zm64 80l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm128 0l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zM64 400l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zm112 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16z"
              />
            </svg>
            <p className="text-2xl">Events</p>
          </div>
        </Link>
      </div>
    </section>
  );
}
