"use client"
import Image from "next/image";
// import styles from "./page.module.css";
import styles from './chat.module.css'
import SignUpPage from "./components/signuppage/signup";
import LogInPage from "./components/loginpage/login"
import { useState } from "react";


export default function Home() {
  const [formDisplay, setFormDisplay] = useState("none")
  return (
    // landing
    // <div className={styles.page}>
    //   <h1 className={styles.title}>Waterdrop Chat</h1>
    //   <div className={styles.buttonHolder}>
    //     <p className={styles.popupbutton} onClick={() => {
    //       setFormDisplay("signup")
    //     }}>Sign up</p>
    //     <p className={styles.popupbutton} onClick={() => {
    //       setFormDisplay("login")
    //     }}>log in</p>
    //   </div>

    //   {/* sign up */}
    //   <div style={{ display: (formDisplay === "signup" ? "block" : "none") }} >
    //     <SignUpPage style={{ display: "none" }} />
    //   </div>
    //   <div style={{ display: (formDisplay === "login" ? "block" : "none") }} >
    //     <LogInPage />
    //   </div>
    // </div >


    // chat
    <div className={styles.messagepage}>
      {/* side panel */}
      <div className={styles.sidepanel}></div>
      
      <div className={styles.messagingpanel}>
        {/* messages */}
        <div className={styles.messageholder}></div>

        {/* inpute */}
        <div className={styles.massageinpute}></div>
      </div>
    </div>
  );
}
