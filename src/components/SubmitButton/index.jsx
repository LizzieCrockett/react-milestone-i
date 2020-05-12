import React from 'react';
import './SubmitButton.css';

const SubmitButton = (props) => {
    return (
        <button id={props.id} label={props.label} type="submit">
            {props.label.charAt(0).toUpperCase() + props.label.slice(1)}
        </button>
    )
}



export default SubmitButton;