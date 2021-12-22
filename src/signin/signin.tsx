import React, { ChangeEvent, FormHTMLAttributes, useContext } from "react";
import styles from "./signin.module.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import logo_black from "../resource/img/Logo_Black.png"
import happy_girl from "../resource/img/thumb_up_girl.png"
import vector_9 from "../resource/img/vector_9.png"
import mail from "../resource/img/email.png"
import lock from "../resource/img/lock.png"
import { TextField } from "@mui/material";
import { AppContext } from "@/AppContext";

const SignIn = () => {
    const [appState, dispatch] = useContext(AppContext)

  return (
    <div className={styles.mainPanel}>

        <img className={styles.curve} src={vector_9}></img>
        <img className={styles.happyGirl} src={happy_girl}></img>

        <div className={styles.welcomeDiv}>
            <div className={styles.header1}>
                <p>Welcome!</p>
            </div>
            <div className={styles.header2}>
                <p>Sign in to your account</p>
            </div>

            <div className={styles.formInput}>
                <div className={styles.email}>
                    <img className={styles.icon} src={mail}></img>

                    <div className={styles.inputTxt}>
                    <TextField style={{width: "100%"}} inputProps={{style: {fontSize: 20}}} InputLabelProps={{style: {fontSize: 20}}} type="text" id="standard-basic" label="Email" variant="standard" />
                    </div>
                </div>
                <div className={styles.pass}>
                    <img className={styles.icon} src={lock}></img>
                    <div className={styles.inputTxt}>
                        <TextField style={{width: "100%"}} inputProps={{style: {fontSize: 20}}} InputLabelProps={{style: {fontSize: 20}}} type="password" id="standard-basic" label="Password" variant="standard" />
                    </div>
                </div>
            </div>

            <div className={styles.forgotpass} onClick={() => dispatch({type: "handle_open_resetForm", value: undefined})}> 
                <p>Forgot Password?</p>
            </div>

            <div className={styles.login}>
                <p>LOG IN</p>
            </div>
            <div className={styles.signup} onClick={() => dispatch({type: "handle_open_signup", value: undefined})}>
                <p>SIGN UP</p>
            </div>
        </div>
    </div>
  );
};

export default SignIn;
