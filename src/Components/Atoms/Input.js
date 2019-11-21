import React from "react";

export default function Input(props) {
    let required=props.inputRequired?"required":false;
    let autoComplete= props.autoComplete?"":"off";
    let autoFocus = props.autoFocus?props.autoFocus:false;
    let disabled = props.isDisabled?"disabled":false;
    return (
        <input
            onChange={props.handleChange}
            className={props.inputClass?`input ${props.inputClass}`:"input"}
            title={props.inputTitle}
            type={props.inputType}
            name={props.inputName}
            value={props.inputValue}
            defaultValue={props.defaultValue}
            placeholder={props.inputPlaceholder}
            required={required}
            disabled={disabled}
            autoComplete={autoComplete}
            autoFocus={autoFocus}
            onKeyDown={props.handleKeyDown}
            onKeyUp={props.handleKeyUp}
       />
    );
}
