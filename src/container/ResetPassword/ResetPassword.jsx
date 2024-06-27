import { useState } from "react";
import styles from "../SingUp/CreateAccount.module.css";
import { IoCloseSharp } from "react-icons/io5";
import useUser from "../../CustomHook/useUser";

function ResetPassword({onClose}) {

  const [formVal, setFormVal] = useState({
    name: "",
    email: "",
    passwordCurrent: "",
    password: "",
  });

//   console.log(formVal, "formVal");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const { getToken, logout } = useUser();


  function resetPasswordHandler(e, key){
    const val = e.target.value;
    setFormVal((old) => {
        return {
            ...old,
            [key]: val,
        }
    })
  };


    // API Fetch Reset Password 

    async function userPasswordReset(){

        try {

            const url = "https://academics.newtonschool.co/api/v1/user/updateMyPassword";
            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            myHeaders.append("projectID", "tark2cu0xc4y");
            myHeaders.append("Authorization", `Bearer ${getToken}`);

            const raw = JSON.stringify({
            "name": formVal.name,
            "email": formVal.email,
            "passwordCurrent": formVal.passwordCurrent,
            "password": formVal.password,
            "appType": "music"
            });

            const requestOptions = {
            method: "PATCH",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
            };

            const response = await fetch(url, requestOptions);
            const data = await response.json();


            if(data.status === "success"){
                setSuccess("Password Change Successful");
            }
            

            // console.log(data, "possword forget");

        }catch (error) {
            console.error(error)
        }
        
    }




  function onChangePasswordHandler(event){
    event.preventDefault();

    console.log("change password");

    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const emailVal = regex.test(formVal.email);
    
    if(formVal.name === "" && formVal.email === "" && formVal.passwordCurrent === "" && formVal.password === ""){
        setError("All input box is required !");
    }else if(formVal.name === ""){
        setError("The name is required !");
    }else if(formVal.email === "" || !emailVal){
        setError("The email is required !");
    }else if(formVal.passwordCurrent === ""){
        setError("The Old password is required !");
    }else if(formVal.password === ""){
        setError("The New password is required !");
    }else{
        userPasswordReset();
    }

  }

  return (
    <>
      <div className={styles.cearte_account}>
        <IoCloseSharp className={styles.close_btn} onClick={onClose} />
        <h3 className={styles.heding}>Forget Password</h3>

        <form onSubmit={onChangePasswordHandler}>

            <h3 className={styles.success_message}>{success}</h3>

          <div>
            <input
              className={styles.input_styles}
              type="text"
              placeholder="Name"
              id="name"
              onChange={(e) => {
                resetPasswordHandler(e, "name")
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
                resetPasswordHandler(e, "email")
                setError("")
                setSuccess("")
              }}
            />
          </div>

          <div>
            <input
              className={styles.input_styles}
              type="password"
              placeholder="Old Password"
              id="passwordCurrent"
              onChange={(e) => {
                resetPasswordHandler(e, "passwordCurrent")
                setError("")
                setSuccess("")
              }}
            />
          </div>

          <div>
            <input
              className={styles.input_styles}
              type="password"
              placeholder="New Password"
              id="password"
              onChange={(e) => {
                resetPasswordHandler(e, "password")
                setError("")
                setSuccess("")
              }}
            />
          </div>

          <div className={styles.error_btn}>
            <p className={styles.error}>{error}</p>
            <button onClick={onChangePasswordHandler} className={styles.createAccount_btn}>Reset Password</button>
          </div>

        </form>
      </div>
    </>
  );
}

export default ResetPassword;
