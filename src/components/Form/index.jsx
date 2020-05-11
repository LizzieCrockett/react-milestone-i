import React from 'react';
import './Form.css';

const confirmationMessage = "Thank you for sending me your data. I will now sell it for large amounts of money.";

const Form = ({ children }) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(confirmationMessage);
        console.log(event.target);
    }
    return (
        <form onSubmit={handleSubmit}>
            {children}
        </form >

    )
}







export default Form;