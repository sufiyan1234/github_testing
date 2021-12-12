"use strict"

import "./styles.css";
import React, { useState } from "react";
import classes from "./index.module.css";

function App() {
    const [enteredEmail, setEnteredEmail] = useState("");
    const [emailIsValid, setEmailIsValid] = useState();
    const [enteredPassword, setEnteredPassword] = useState("");
    const [passwordIsValid, setPasswordIsValid] = useState();
    const [formIsValid, setFormIsValid] = useState(false);
    const emailChangeHandler = (event) => {
        setEnteredEmail(event.target.value);
        setFormIsValid(
            event.target.value.includes("@") && enteredPassword.trim().length > 6
        );
        };
    const passwordChangeHandler = (event) => {
        setEnteredPassword(event.target.value);
        setFormIsValid(
            event.target.value.trim().length > 6 && enteredEmail.includes("@")
        );
    };
    const validateEmailHandler = () => {
        setEmailIsValid(enteredEmail.includes("@"));
    };
    const validatePasswordHandler = () => {
        setPasswordIsValid(enteredPassword.trim().length > 6);
    };
    // const submitHandler = (event) => {
    // event.preventDefault();
    // props.onLogin(enteredEmail, enteredPassword);
    // };
    return (
        <div>
            <form>
                <div className={`${classes.control} ${emailIsValid === false ? classes.invalid : ''}`}>
                    <label htmlFor="email">E-Mail</label>
                    <input
                        type="email"
                        id="email"
                        value={enteredEmail}
                        onChange={emailChangeHandler}
                        onBlur={validateEmailHandler}
                />
                </div>
                <div
                    className={`${classes.control} ${passwordIsValid === false ? classes.invalid : ''}`}>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={enteredPassword}
                        onChange={passwordChangeHandler}
                        onBlur={validatePasswordHandler}
                    />
                </div>
                <div className={classes.actions}>
                    <button type="submit" disabled={!formIsValid}>
                         Login
                    </button>
                </div>
            </form>
        </div>
    );
}
export default App;


