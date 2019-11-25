import React, { useState } from 'react';
import { notify } from 'react-notify-toast';
import ModalBox from '../Atoms/ModalBox';
import Signin from '../Molecules/Signin';
import Signup from '../Molecules/Signup';
import { doSignInWithEmailAndPassword, doCreateUserWithEmailAndPassword, SingInWithGoogle } from '../../services/auth';
import { uploadUserData } from '../../services/db';

export default function Authentication(props) {
    const uiconfig = {
        EMAIL_ERROR: "auth/invalid-email",
        EMAIL_ERROR_MESSAGE: "Please check your email address.",
        PASSWORD_ERROR: "auth/wrong-password",
        PASSWORD_ERROR_MESSAGE: "Invalid Email/Password combination.",
        UESR_NOT_FOUND: "auth/user-not-found",
        UESR_NOT_FOUND_MESSAGE: "No User found with given email",
        EMAIL_EXISTS_ERROR: "auth/email-already-in-use",
        EMAIL_EXISTS_ERROR_MESSAGE: "This email is already registered. Please Login!",
        WEAK_PASSWORD_ERROR: "auth/weak-password",
        WEAK_PASSWORD_ERROR_MESSAGE: "The password must be 6 characters long or more.",
    }
    const [activeForm, setactiveForm] = useState("signin");
    const [email, setEmail] = useState("");
    const [password, setpassword] = useState("");
    const [error, seterror] = useState({
        status: false,
        msg: ""
    });
    const [isLoading, setisLoading] = useState(false);

    const handleChange=(event)=>{
        if(event.target.name==="email"){
            setEmail(event.target.value)
        }
        else if(event.target.name==="password"){
            setpassword(event.target.value)
        }
    }

    const handleSignIn = (event) => {
        event.preventDefault();
        event.stopPropagation();
        setisLoading(true)
        doSignInWithEmailAndPassword(email, password)
            .then(authUser => {
                notify.show('Logged in successfully', 'success', 2000);
                setEmail("");
                setpassword("");
                props.setshowAuthForm(false)
                seterror({
                    status: false,
                    msg: ""
                })
                setisLoading(false);
            })
            .catch(error => {
                switch (error.code) {
                    case uiconfig.EMAIL_ERROR:
                        seterror({
                            status: true,
                            msg: uiconfig.EMAIL_ERROR_MESSAGE
                        })
                        break;
                    case uiconfig.PASSWORD_ERROR:
                        seterror({
                            status: true,
                            msg: uiconfig.PASSWORD_ERROR_MESSAGE
                        })
                        break;
                    case uiconfig.UESR_NOT_FOUND:
                        seterror({
                            status: true,
                            msg: uiconfig.UESR_NOT_FOUND_MESSAGE
                        })
                        break;
                    default:
                        notify.show('Something went wrong. Please retry!', 'error', 4000);
                        seterror({
                            status: true,
                            msg: error.message
                        })
                }
                setisLoading(false)
            })
    }

    const handleSignUp = (event) =>{
        event.preventDefault();
        event.stopPropagation();
        setisLoading(true)
        doCreateUserWithEmailAndPassword(email, password)
        .then(()=>{
            notify.show('Registered successfully', 'success', 2000);
            setEmail("");
            setpassword("");
            props.setshowAuthForm(false)
            seterror({
                status: false,
                msg: ""
            })
            uploadUserData();
            setisLoading(false)
        })
        .catch(error=>{
            switch (error.code) {
                case uiconfig.EMAIL_EXISTS_ERROR:
                    seterror({
                        status: true,
                        msg: uiconfig.EMAIL_EXISTS_ERROR_MESSAGE
                    })
                    break;
                case uiconfig.WEAK_PASSWORD_ERROR:
                    seterror({
                        status: true,
                        msg: uiconfig.WEAK_PASSWORD_ERROR_MESSAGE
                    })
                    break;
                case uiconfig.UESR_NOT_FOUND:
                    seterror({
                        status: true,
                        msg: uiconfig.UESR_NOT_FOUND_MESSAGE
                    })
                    break;
                default:
                    notify.show('Something went wrong. Please retry!', 'error', 4000);
                    seterror({
                        status: true,
                        msg: error.message
                    })
            }
            setisLoading(false)
        })
    }

    const handleActiveForm = (form)=>{
        seterror({
            status:false,
            msg:""
        })
        setactiveForm(form);
    }

    const closeModal=()=>{
        props.setshowAuthForm(false)
    }

    const handleGoogleSignin = ()=>{
        SingInWithGoogle();
    }

    return (
        <ModalBox>
            {
                activeForm === "signin" ?
                    <Signin 
                     email={email}
                     error={error}
                     password={password}
                     handleSignIn={handleSignIn}
                     handleChange={handleChange}
                     handleActiveForm={handleActiveForm}
                     closeModal={closeModal}
                     isLoading = {isLoading}
                     handleGoogleSignin={handleGoogleSignin}
                    /> : 
                    <Signup 
                        email={email}
                        error={error}
                        password={password}
                        handleSignUp={handleSignUp}
                        handleChange={handleChange}
                        handleActiveForm={handleActiveForm}
                        closeModal={closeModal}
                        isLoading = {isLoading}
                        handleGoogleSignin={handleGoogleSignin}
                   />
            }
        </ModalBox>
    )
} 