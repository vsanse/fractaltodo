import React from "react";

export default function Button(props) {
    let btnClass = props.btnClass?`btn ${props.btnClass}`:"btn";
    btnClass = props.isLoading?`${btnClass} isloading`: btnClass;
    return (
        <button name={props.btnName || ""} onClick={props.handleClick} className={btnClass} title={props.btnTitle} type={props.btnType}  >
            <>{props.isLoading?<p className="loading">Please wait<span>.</span><span>.</span><span>.</span></p>: props.btnLabel}</>
        </button>
    );
}
