import React from "react";

export default function Login() {
  return (
    <main class="mx-auto flex h-[90vh] w-full items-center justify-center text-white">
      <section class="flex w-[30rem] flex-col space-y-10 overflow-hidden">
        <div class="text-center text-4xl font-medium">Log In</div>

        <div class="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-[#00b140]">
          <input
            type="text"
            placeholder="Email"
            class="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
          />
        </div>

        <div class="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-[#00b140]">
          <input
            type="password"
            placeholder="Password"
            class="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
          />
        </div>

        <button class="transform rounded-sm bg-[#00b140] py-2 font-bold duration-300 hover:bg-[#409C3E]">
          LOG IN
        </button>
      </section>
    </main>
  );
}
