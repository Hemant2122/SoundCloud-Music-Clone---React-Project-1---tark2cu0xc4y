import { useContext, useState } from "react";
import styles from "../SingUp/CreateAccount.module.css";
import { IoCloseSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../Provider/UserProvider";

function SignIn({ onClose }) {
  const [formVal, setFormVal] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();

  const contextData = useContext(UserContext);
  const { nameHandler, tokenHandler } = contextData;

  console.log(contextData, "contextData");

  async function submitForm() {
    const url = "https://academics.newtonschool.co/api/v1/user/login";
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("projectID", "tark2cu0xc4y");

    const raw = JSON.stringify({
      email: formVal.email,
      password: formVal.password,
      appType: "music",
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    try {
      const response = await fetch(url, requestOptions);
      const data = await response.json();

      const token = data?.token;
      const name = data?.data?.user?.name;

      console.log(name, token, "login data");

      if (token && name) {
        tokenHandler(token);
        nameHandler(name);
        setSuccess("Login successful!");
      } else {
        setError(data.message || "Login failed");
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
      console.error("Error:", error);
    }
  }

  function signInFormHandler(e, key) {
    const val = e.target.value;
    setFormVal((old) => ({
      ...old,
      [key]: val,
    }));
  }

  function onSubmitHandler(event) {
    event.preventDefault();

    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const emailVal = regex.test(formVal.email);

    if (formVal.email === "" && formVal.password === "") {
      setError("The email and password are required!");
    } else if (formVal.email === "" || !emailVal) {
      setError("The email is required!");
    } else if (formVal.password === "") {
      setError("The password is required!");
    } else {
      submitForm();

      setTimeout(() => {
        navigate("/");
        // location.reload();
      }, 2000)
    }
  }

  return (
    <>
      <div className={styles.cearte_account}>
        <IoCloseSharp className={styles.close_btn} onClick={onClose} />
        <h3 className={styles.heding}>Sign up</h3>

        <form onSubmit={onSubmitHandler}>
          <h3 className={styles.success_message}>{success}</h3>

          <div>
            <input
              className={styles.input_styles}
              type="text"
              placeholder="Email"
              id="email"
              onChange={(e) => {
                signInFormHandler(e, "email");
                setError("");
              }}
            />
          </div>

          <div>
            <input
              className={styles.input_styles}
              type="password"
              placeholder="Password"
              id="password"
              onChange={(e) => {
                signInFormHandler(e, "password");
                setError("");
              }}
            />
          </div>

          <div className={styles.error_btn}>
            <p className={styles.error}>{error}</p>
            <button type="submit" className={styles.createAccount_btn}>
              Sign in
            </button>
            <p>
              Don't have an account?{" "}
              <span
                onClick={() => {
                  navigate("/signup");
                }} id={styles.sing_in}>
                Sign up
              </span>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignIn;
