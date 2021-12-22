import React, { ChangeEvent, FormHTMLAttributes, useContext } from "react";
import styles from "./forgotPass.module.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import logo_black from "../resource/img/Logo_Black.png"
import happy_girl from "../resource/img/thumb_up_girl.png"
import vector_9 from "../resource/img/vector_9.png"
import mail from "../resource/img/email.png"
import lock from "../resource/img/lock.png"
import { Input, TextField } from "@mui/material";
import { AppContext } from "@/AppContext";

const ariaLabel = { 'aria-label': 'description' };

const ForgotPass = () => {
  const [appState, dispatch] = useContext(AppContext)

  return (
    <div className={styles.mainPanel}>

        <img className={styles.curve} src={vector_9}></img>
        <img className={styles.happyGirl} src={happy_girl}></img>

        <div className={styles.welcomeDiv}>
            <div className={styles.header1}>
                <p>Reset your password</p>
            </div>
            <div className={styles.header2}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam feugiat accumsan mi eget pellentesque.</p>
            </div>

            <div className={styles.inputTxt}>
                <TextField style={{width: "100%", height: "100%" }} inputProps={{style: {fontSize: 20}}} InputLabelProps={{style: {fontSize: 20}}} type="email" id="standard-basic" label="Type Your Email" variant="filled" size="medium" />
            </div>

            <div className={styles.submit} onClick={() => dispatch({type: "handle_open_signin", value: undefined})}>
                <p>SUBMIT</p>
            </div>
        </div>
    </div>
  );
};

export default ForgotPass;
