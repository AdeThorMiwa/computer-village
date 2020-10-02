import React, { useState } from "react";
import { toastr } from "react-redux-toastr";
import { NewsLetterForm } from "./style";
import axios from "axios";
import HOST from "../../proxy";

const NewsLetter = ({ onSubmit }) => {
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    signUpToNewsLetterAsync(email);
  };

  const signUpToNewsLetterAsync = async (email) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      await axios.post(
        `${HOST}/api/newsletter`,
        JSON.stringify({ email }),
        config
      );
      const toastOptions = {
        icon: "success",
        status: "success",
        timeOut: 0,
        showCloseButton: true,
      };
      toastr.light(
        "Subscription Successful",
        "Your subscription to our newsletter was succeessful!",
        toastOptions
      );
    } catch (e) {
      const toastOptions = {
        icon: "error",
        status: "error",
        timeOut: 0,
        showCloseButton: true,
      };
      toastr.light(
        "Subscription Failed!",
        "Something went horribly wrong. Please try again",
        toastOptions
      );
    }
  };

  const handleChange = (e) => setEmail(e.target.value);
  return (
    <NewsLetterForm onSubmit={(e) => handleSubmit(e)}>
      <input
        type="email"
        name="email"
        onChange={(e) => handleChange(e)}
        value={email}
        placeholder="Enter Your Email"
      />
      <button type="submit">Subscribe</button>
    </NewsLetterForm>
  );
};

export default NewsLetter;
