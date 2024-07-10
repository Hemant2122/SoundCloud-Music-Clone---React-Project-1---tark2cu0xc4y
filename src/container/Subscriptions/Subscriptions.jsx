import { IoCloseSharp } from "react-icons/io5";
import styles from "../SingUp/CreateAccount.module.css";
import css from "./Subscriptions.module.css";
import googlePay from "../../assets/icons/google-pay.svg";
import phonePe from "../../assets/icons/phonepe-1.svg";
import payPal from "../../assets/icons/paypal.svg";
import razorpay from "../../assets/icons/razorpay.svg";
import card from "../../assets/icons/image.png";
import { useState } from "react";

function Subscriptions({ onClose }) {
  const [isActive, setIsActive] = useState("debit_card");
  const [iscard, setIsCard] = useState(true);
  const [phone_google, setPhone_google] = useState(false);

  

  function actionActive(e) {
    const value = e.target.id;
    setIsActive(value);

    if(value === "phonePe"){
      setIsCard(false);
      setPhone_google(true);
    }else if(value === "debit_card"){
      setPhone_google(false);
      setIsCard(true);
    }else if(value === "googlePay"){
      setIsCard(false);
      setPhone_google(true);
    }else if(value === "payPal"){
      setIsCard(false);
      setPhone_google(true);
    }else if(value === "razorpay"){
      setIsCard(false);
      setPhone_google(true);
    }
  }

  return (
    <>
      <div
        className={[`${styles.cearte_account} ${css.subscriptions_container}`]}
      >
        <IoCloseSharp className={styles.close_btn} onClick={onClose} />
        <h3 className={styles.heding}>Subscriptions</h3>

        <div>
          <div className={css.payment_method}>SELECT PAYMENT METHOD</div>
          <div className={css.opstions}>
            <div className={isActive === "phonePe" ? `${css.isActive}` : ""}>
              <img
                id="phonePe"
                className={[`${css.phonePe} ${css.payment}`]}
                src={phonePe}
                alt="phonePe"
                onClick={actionActive}
              />
            </div>
            <div className={isActive === "googlePay" ? `${css.isActive}` : ""}>
              <img
                id="googlePay"
                className={[`${css.googlePay} ${css.payment}`]}
                src={googlePay}
                alt="googlePay"
                onClick={actionActive}
              />
            </div>
            <div className={isActive === "payPal" ? `${css.isActive}` : ""}>
              <img
                id="payPal"
                className={[`${css.payPal} ${css.payment}`]}
                src={payPal}
                alt="payPal"
                onClick={actionActive}
              />
            </div>
            <div className={isActive === "razorpay" ? `${css.isActive}` : ""}>
              <img
                id="razorpay"
                className={[`${css.razorpay} ${css.payment}`]}
                src={razorpay}
                alt="razorpay"
                onClick={actionActive}
              />
            </div>
            <div className={isActive === "debit_card" ? `${css.isActive}` : ""}>
              <img
                id="debit_card"
                className={[`${css.ATM_card} ${css.payment}`]}
                src={card}
                alt="card"
                onClick={actionActive}
              />
            </div>
          </div>
        </div>

        <form>
          <div className={css.payment_details}>ENTER PAYMENT DETAILS</div>

          {/* <h3 className={styles.success_message}>{success}</h3> */}

          <div>
            <input
              className={css.input_1_style}
              type="text"
              placeholder="Email Address"
            />
          </div>

          {/* ATM Card Details */}
          { iscard &&  <div>
            <div>
              <input
                className={css.input_1_style}
                type="text"
                maxlength="16"
                placeholder="Card Number"
              />
            </div>

            <div className={css.expire_CVC}>
              <input
                className={css.input_2_style}
                type="text"
                maxlength="5"
                placeholder="Expire"
              />
              <input
                className={css.input_2_style}
                type="password"
                maxlength="3"
                placeholder="CVC"
              />
            </div>

            <div>
              <input
                className={css.input_1_style}
                type="text"
                placeholder="Card Holder Name"
              />
            </div>
          </div>}

          {/* Phone Pe && Google pay */}

          { phone_google && <div>
            <div>
              <input className={css.input_1_style} type="text" placeholder="Name" />
            </div>
            <div>
              <input className={css.input_1_style} type="text" placeholder="Number or UPI id" />
            </div>
          </div> }

          <div>
            <button className={css.pay_btn}>PAY NOW</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Subscriptions;
