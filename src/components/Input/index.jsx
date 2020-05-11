import React from 'react';

const Input = (props) => {
    return (
        <>
            <label htmlFor={props.label}>{props.label.charAt(0).toUpperCase() + props.label.slice(1)}: </label>
            <input id={props.id} type={props.type} required={props.required}></input>
        </>
    )
}

export default Input;