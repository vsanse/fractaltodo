// Reusable presentational component for a Dropdown list.
// This is using an input tag that provides an autocompletion list.
// For the one using a select list. Just see the Dropdown_Select.js file.

import React from "react";

// Passing props to this component is similar to passing props to any other input element.
// Refer to reusables/Input.js for reference.

const Dropdown_Datalist = props => {
	let required = props.inputRequired ? props.inputRequired : false, //
		autoFocus = props.inputAutoFocus ? props.inputAutoFocus : false, // Autofocus set or not.
		options = props.options ? props.options : []; // If no options are passed.

	let optionsToRender = [
		...options.map((option, index) => (
			<option key={index} value={index}>
				{option}
			</option>
		))
	];

	return (
		<div className="dropdown">
			<input
				className={props.inputClass ? `${props.inputClass} input` : "input"}
				title={props.inputTitle}
				name={props.inputName}
				value={props.inputValue}
				onChange={props.handleChange}
				placeholder={props.inputPlaceholder}
				required={required}
				autoFocus={autoFocus}
				list={props.inputClass ? props.inputClass + "-list" : "input-list"}
			/>

			{/* Now setting the datalist for the above input element. */}

			<datalist
				id={props.inputClass ? props.inputClass + "-list" : "input-list"}
			>
				{optionsToRender}
			</datalist>
		</div>
	);
};

export default Dropdown_Datalist;
