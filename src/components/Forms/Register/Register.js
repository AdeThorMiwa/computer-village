import React, { useEffect, useRef, useState } from "react";
import { RegisterContainer } from "./style";
import { InputBox } from "../FormElements/Elements";
import axios from "axios";
import { toastr } from "react-redux-toastr";
import HOST from "../../../proxy";

const Register = () => {
  const registerRef = useRef();
  useEffect(() => {
    registerRef.current.style.opacity = 1;
  }, []);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    c_password: "",
  });

  const { username, email, password, c_password } = formData;

  const onChangeHandler = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const res = await axios.post(
        `${HOST}/api/register`,
        JSON.stringify({
          username,
          email,
          password,
          confirmPassword: c_password,
        }),
        config
      );
      console.log(res.data);
      // window.location.replace(`https://village-dashboard.netlify.app/auth/${res.data}`);
    } catch (e) {
      const toastOptions = {
        icon: "error",
        status: "error",
        timeOut: 0,
        showCloseButton: true,
      };
      toastr.light("Invalid Login!", "Please Try Again", toastOptions);
    }
  };

  return (
    <RegisterContainer
      className="py-4 px-4 m-0"
      ref={registerRef}
      onSubmit={(e) => onSubmitHandler(e)}
    >
      <h3>Register With Us</h3>
      <div className="mt-3 mb-4">
        <InputBox
          name="username"
          value={username}
          required
          onChange={(e) => onChangeHandler(e)}
          placeholder="Username"
        />
        <InputBox
          type="email"
          name="email"
          value={email}
          required
          onChange={(e) => onChangeHandler(e)}
          placeholder="Email"
        />
        <InputBox
          name="password"
          value={password}
          onChange={(e) => onChangeHandler(e)}
          type="password"
          required
          placeholder="Password"
        />
        <InputBox
          name="c_password"
          value={c_password}
          onChange={(e) => onChangeHandler(e)}
          type="password"
          required
          placeholder="Confirm Password"
        />
        <InputBox type="submit" value="Register" />
      </div>
      {/* <div>
        <p>Or Register With</p>
        <div className="row m-0">
          <div className="col-12 col-sm-6 m-0 p-0 pr-sm-1">
            <button className="btn-facebook">
              <i className="fa fa-facebook"></i>
            </button>
          </div>
          <div className="col-12 col-sm-6 m-0 p-0 pl-sm-1">
            <button className="btn-google">
              <i className="fa fa-google-plus"></i>
            </button>
          </div>
        </div>
      </div> */}
    </RegisterContainer>
  );
};

export default Register;
