import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function NavBar() {
  const location = useLocation();

  return (
    <div className="text-white py-3 px-6 md:px-8 flex justify-between items-center">
      <div>
        <Link to="/">
          <img src="/sportLogo.png" alt="Logo" className="w-1/3" />
        </Link>
      </div>
      <div>
        <ul>
          {location.pathname !== "/login" && (
            <li>
              <Link
                to="/login"
                className="bg-[#00b140] px-4 py-2 rounded text-sm md:text-base text-white hover:bg-green-600 transition-all duration-300"
              >
                Login
              </Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
