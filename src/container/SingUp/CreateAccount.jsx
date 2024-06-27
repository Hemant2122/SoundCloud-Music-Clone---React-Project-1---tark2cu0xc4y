import { useState } from "react";
import styles from "./CreateAccount.module.css";
import { IoCloseSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function CreateAccount({onClose}) {

  const [formVal, setFormVal] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();

  function signUpFormHandler(e, key){
    const val = e.target.value;
    setFormVal((old) => {
        return {
            ...old,
            [key]: val,
        }
    })
  };


    // API Fetch Sign Up 

    async function signUpForm(){
        try {
            const url = `https://academics.newtonschool.co/api/v1/user/signup`;
            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            myHeaders.append("projectID", "tark2cu0xc4y");

            const raw = JSON.stringify({
                "name": formVal.name,
                "email": formVal.email,
                "password": formVal.password,
                "appType": "music"
            });

            const requestOptions = {
                method: "POST",
                headers: myHeaders,
                body: raw,
                redirect: "follow"
            };

            const response = await fetch(url, requestOptions);
            const data = await response.json();

            if(data.status === "fail"){
                setError(data.message);
            }else {
                setSuccess("Account created " + data.status);
            }

        } catch (error) {
            setError(error.message);
            console.log(error, "error");
        }
    }



  function onSubmitHandler(event){
    event.preventDefault();

    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const emailVal = regex.test(formVal.email);
    
    if(formVal.name === "" && formVal.email === "" && formVal.password === ""){
        setError("The name, email and password is required !");
    }else if(formVal.name === ""){
        setError("The name is required !");
    }else if(formVal.email === "" || !emailVal){
        setError("The email is required !");
    }else if(formVal.password === ""){
        setError("The password is required !");
    }else{
        signUpForm();
        setTimeout(() => {
          navigate("/login");
        }, 3000);
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
              placeholder="Name"
              id="name"
              onChange={(e) => {
                signUpFormHandler(e, "name")
                setError("")
                setSuccess("")
              }}
            />
          </div>

          <div>
            <input
              className={styles.input_styles}
              type="text"
              placeholder="Email"
              id="email"
              onChange={(e) => {
                signUpFormHandler(e, "email")
                setError("")
                setSuccess("")
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
                signUpFormHandler(e, "password")
                setError("")
                setSuccess("")
              }}
            />
          </div>

          <div className={styles.error_btn}>
            <p className={styles.error}>{error}</p>
            <button className={styles.createAccount_btn}>Create Account</button>
            <p>
              Already heve an account? <span onClick={() => {
                navigate("/login");
              }} id={styles.sing_in}>Sign in</span>
            </p>
          </div>

        </form>
      </div>
    </>
  );
}

export default CreateAccount;
