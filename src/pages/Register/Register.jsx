import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  let navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/");
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return <div>Register</div>;
}

export default Register;
