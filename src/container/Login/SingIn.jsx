import { useState } from "react";
import styles from "../SingUp/CreateAccount.module.css";
import { IoCloseSharp } from "react-icons/io5";

function SingIn({onClose, setIsState}) {

    const [formVal, setFormVal] = useState({
        email: "",
        password: "",
    });
    
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    
    console.log(formVal, "formVal");
    
    function signInFormHandler(e, key){
        const val = e.target.value;
        setFormVal((old) => {
            return {
                ...old,
                [key]: val,
            }
        })
    };

    function onSubmitHandler(event){
        event.preventDefault();
    
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const emailVal = regex.test(formVal.email);
        
        if(formVal.email === "" && formVal.password === ""){
            setError("The name, email and password is required !");
        }else if(formVal.email === "" || !emailVal){
            setError("The email is required !");
        }else if(formVal.password === ""){
            setError("The password is required !");
        }else{
            
        }
    
    }

    return (
        <>
          <div className={styles.cearte_account}>
            <IoCloseSharp className={styles.close_btn} onClick={onClose} />
            <h3 className={styles.heding}>Sign in</h3>
    
            <form onSubmit={onSubmitHandler}>
    
                <h3 className={styles.success_message}>{success}</h3>
    
              <div>
                <input
                  className={styles.input_styles}
                  type="text"
                  placeholder="Email"
                  id="email"
                  onChange={(e) => {
                    signInFormHandler(e, "email")
                    setError("")
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
                    signInFormHandler(e, "password")
                    setError("")
                  }}
                />
              </div>
    
              <div className={styles.error_btn}>
                <p className={styles.error}>{error}</p>
                <button className={styles.createAccount_btn}>Sign in</button>
                <p>
                    Dont`t have an account? <span onClick={() => {
                        setIsState(false)
                    }} id={styles.sing_in}>Sign up</span>
                </p>
              </div>
    
            </form>
          </div>
        </>
    );
}

export default SingIn