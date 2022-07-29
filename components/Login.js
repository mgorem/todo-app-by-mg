import React, { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoggingIn, setIsLoggingIn] = useState(true);

  function submitHandler() {
    if (!email || !password) {
      setError("Enter valid email and password");
    }
  }

  return (
    <div
      className="flex-1
      text-xs sm:text-sm 
      flex flex-col justify-center
      gap-2 sm:gap-4 
      items-center"
    >
      <h1
        className="font-extrabold 
        text-2xl 
        sm:text-4xl
        select-none
        uppercase"
      >
        {isLoggingIn ? "Login" : "Register"}
      </h1>
      {error && (
        <div
          className="w-full max-w-[40ch] 
          border border-solid
          border-rose-400 text-rose-400
          py-0.5 text-center"
        >
          {error}
        </div>
      )}
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="text"
        placeholder="Enter your email here"
        className="outline-none
        text-slate-900
        p-2 w-full
        max-w-[40ch]
        duration-300 border-b-2 border-solid border-white
        focus:border-cyan-300"
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Password"
        className="outline-none
        text-slate-900
        p-2 w-full
        max-w-[40ch]
        duration-300 border-b-2 border-solid border-white
        focus:border-cyan-300"
      />
      <button
        onClick={submitHandler}
        className="w-full max-w-[40ch]
        border border-white border-solid
        uppercase py-2
        duration-300 relative 
        after:absolute after:top-0 after:right-full
        after:bg-white after:z-10 after:w-full
        after:h-full overflow-hidden 
        hover:after:translate-x-full after:duration-300
        hover:text-slate-900"
      >
        <h2 className="relative z-20">SUBMIT</h2>
      </button>
      <h2
        className="duration-300 hover:scale-110 cursor-pointer"
        onClick={() => setIsLoggingIn(!isLoggingIn)}
      >
        {!isLoggingIn ? "Login" : "Register"}
      </h2>
    </div>
  );
}
