import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  let navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/");
    }
  }, []);

  const [dataLogin, setDataLogin] = useState({
    email: "eve.holt@reqres.in",
    password: "cityslicka",
  });

  const handleLogin = async () => {
    try {
      const res = await axios({
        method: "POST",
        url: "https://reqres.in/api/login",
        data: dataLogin,
      });
      if (res.status === 200) {
        localStorage.setItem("token", res.data.token);
        navigate("/", { replace: true });
      }
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App my-10">
      <input
        type="email"
        placeholder="email"
        value={dataLogin.email}
        className="border-slate-400 border-2"
        onChange={(e) =>
          setDataLogin({
            ...dataLogin,
            email: e.target.value,
          })
        }
      />
      <input
        type="password"
        placeholder="password"
        value={dataLogin.password}
        className="border-slate-400 border-2"
        onChange={(e) =>
          setDataLogin({
            ...dataLogin,
            password: e.target.value,
          })
        }
      />

      <button
        onClick={handleLogin}
        type="submit"
        className="border-2 border-red-200"
      >
        Login
      </button>
    </div>
  );
}

export default Login;
