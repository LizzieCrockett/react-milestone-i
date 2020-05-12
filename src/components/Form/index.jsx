import React from 'react';
import './Form.css';
import Input from '../Input'
import SubmitButton from '../SubmitButton';

const Form = (props) => {
    const [registered, setStatus] = React.useState(false);
    const [userName, setUserName] = React.useState('');

    const handleInput = (event) => {
        setUserName(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setStatus(true);
    }

    return (
        <>
            {!registered ?
                <>
                    <p>Register here:</p>
                    <form onSubmit={handleSubmit}>
                        <div><Input id="name" type="text" label="name" required="required" onChange={handleInput} />
                            <Input id="email" type="email" label="email" required="required" />
                            <Input id="password" type="password" label="password" required="required" /> </div>
                        <div> <Input id="favecolour" type="text" label="favourite colour" />
                            <Input id="luckynumber" type="number" label="lucky number" /></div>
                        <SubmitButton id="submit" label="submit" />
                    </form >
                </>
                :
                <div>
                    <p>Thank you, {userName}, for sending me your data. I will now sell it for large amounts of money 🤣.</p>
                    <iframe src="https://giphy.com/embed/3orif7aLUehOfdmlXy" width="240" height="183" frameBorder="0" title="Mr Burns" className="giphy-embed" allowFullScreen></iframe>
                </div>
            }
        </>
    )
}







export default Form;