import { Alert } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { accountService } from "../../_services/account.services";

import "../../styles/auth.css";

const Login = () => {
  const [credentials, setCredentials] = useState({});
  const [errorMessage, setErrorMessage] = useState(false);
  const navigate = useNavigate();

  const handleClick = async () => {
    accountService
      .login(credentials)
      .then((res) => {
        if (res.status === 200) {
          accountService.saveToken(res.data.access_token);
          console.log(res);
          navigate("/admin/patients");
        } else {
          setErrorMessage(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="auth bg-light">
      <div className="container rounded-4 shadow-lg  __container">
        <div
          style={{ height: "600px" }}
          className="row  rounded-2 d-flex justify-content-around bg- "
        >
          <div className="col-6 d-flex flex-column justify-content-around rounded-4   __colleft">
            <h2 className="">Lorem ipsum dolor sit, amet consectetur</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elitcon
              sectetur adipisicing elit
            </p>
            <p className="d-flex justify-content-center ">
              <img
                style={{
                  height: "300px",
                }}
                className="rounded-5"
                src="https://img.freepik.com/free-photo/doctor-nurses-special-equipment_23-2148980721.jpg?size=626&ext=jpg"
                alt=""
              />
            </p>
          </div>
          <div className="col-5 d-flex flex-column justify-content-center  bg-">
            <div className="container">
              <div className="row text-center  ">
                {errorMessage && (
                  <div class="alert alert-danger" role="alert">
                    {/* Password or Name incorrect !! */}
                    <Alert severity="error">
                      Password or Name incorrect !!{" "}
                    </Alert>
                  </div>
                )}
                <h1 className=" fw-bold">Sign in</h1>
                <p>Join your own platform</p>
              </div>
              <div className="row ">
                <input
                  value={credentials.name}
                  name="email"
                  className=" mb-4"
                  type="text"
                  placeholder="Name"
                  onChange={handleChange}
                />

                <input
                  value={credentials.password}
                  name="password"
                  className=" "
                  type="password"
                  placeholder="Password"
                  onChange={handleChange}
                />
              </div>
              <div className="row my-4">
                <button onClick={handleClick} className="btn btn-dark">
                  Sign in
                </button>
              </div>
              <div className="text-center mt-5">
                <p>
                  You don't have account ?{" "}
                  <a href="#" className="">
                    {" "}
                    Sign up
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
