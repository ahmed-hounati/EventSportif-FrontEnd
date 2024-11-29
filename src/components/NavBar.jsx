import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AuthService from "../services/auth.service";

export default function NavBar() {
  const location = useLocation();
  const navigate = useNavigate();

  const isLoggedIn = !!JSON.parse(localStorage.getItem("token"));

  async function handleLogout() {
    try {
      await AuthService.logout();
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="text-white py-3 px-6 md:px-8 flex justify-between items-center">
      <div>
        <Link to="/">
          <img src="/sportLogo.png" alt="Logo" className="w-1/3" />
        </Link>
      </div>
      <div>
        <ul>
          {isLoggedIn ? (
            <li>
              <button
                onClick={handleLogout}
                className="bg-red-700 px-4 py-2 rounded text-sm md:text-base text-white hover:bg-red-600 transition-all duration-300"
              >
                Logout
              </button>
            </li>
          ) : (
            location.pathname !== "/login" && (
              <li>
                <Link
                  to="/login"
                  className="bg-[#00b140] px-4 py-2 rounded text-sm md:text-base text-white hover:bg-green-600 transition-all duration-300"
                >
                  Login
                </Link>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
}
