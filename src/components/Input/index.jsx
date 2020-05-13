import React from 'react';

const Input = ({label, id, type, required, onChange}) => {
    return (
        <>
            <label htmlFor={label}>{label.charAt(0).toUpperCase() + label.slice(1)}: </label>
            <input id={id} type={type} required={required} onChange={onChange}></input>
        </>
    )
}

export default Input;