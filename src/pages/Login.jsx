import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/auth.service";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  if (localStorage.getItem("token")) {
    navigate("/dashboard");
  }

  const validateInputs = () => {
    if (!email || !password) {
      setError("Both email and password are required.");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
      return false;
    }
    return true;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");
    setLoading(true);

    if (!validateInputs()) {
      setLoading(false);
      return;
    }
    try {
      await AuthService.login(email, password);
      navigate("/dashboard");
    } catch (err) {
      console.log(err);
      const errorMessage = err || "Something went wrong. Please try again.";
      setError(errorMessage);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="mx-auto flex h-[90vh] w-full items-center justify-center text-white">
      <section className="flex w-[30rem] flex-col space-y-10 overflow-hidden">
        <div className="text-center text-4xl font-medium">Log In</div>

        {error && (
          <div className="text-red-500 text-sm text-center">{error}</div>
        )}
        {message && (
          <div className="text-green-500 text-sm text-center">{message}</div>
        )}

        <form className="flex flex-col gap-7" onSubmit={handleLogin}>
          <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-[#00b140]">
            <input
              type="email"
              placeholder="Email"
              className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-[#00b140]">
            <input
              type="password"
              placeholder="Password"
              className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`transform rounded-sm py-2 font-bold duration-300 ${
              loading
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-[#00b140] hover:bg-[#409C3E]"
            }`}
          >
            {loading ? "Logging in..." : "LOG IN"}
          </button>
        </form>
      </section>
    </main>
  );
}
