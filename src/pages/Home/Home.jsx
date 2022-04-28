import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  let navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      window.location.href = "/login";
    }
  }, []);

  if (!token) {
    return <div>Loading...</div>;
  }

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login", { replace: true });
  };

  return (
    <>
      <div>
        <button onClick={handleLogout} className="border-2 border-red-200">
          Logout
        </button>
      </div>
    </>
  );
}

export default Home;
