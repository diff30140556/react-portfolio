import React, { useState } from 'react';
import SubTitle from './SubTitle'


function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [isEmail, setIsEmail] = useState(true);
    const [message, setMessage] = useState('');
    const [alert, setAlert] = useState('');
    const emailValidation = /^([a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]{2,4})?$/;

    const handleNameChange = (e) => {
        let newValue = e.target.value;
        setName(newValue)
    }

    const handleEmailChange = (e) => {
        let newValue = e.target.value;
        setEmail(newValue);
        setIsEmail(emailValidation.test(newValue));
    }

    const handleMessageChange = (e) => {
        let newValue = e.target.value;
        setMessage(newValue)
    }

    const handleBlur = (e) => {
        const fieldName = e.target.name; 
        let alertMsg = ``;

        if (e.target.value === '') {
            alertMsg = `${fieldName} field must be filled`
            setAlert(alertMsg);
        } else if (!isEmail) {
            setAlert('Email is not valid')
        } else {
            setAlert('')
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isEmail || name === '' || email === '' || message ==='') {
            return
        }
        console.log('since there is no back end, log PASS instead of submit the form')
    }

    return (
        <SubTitle title={"Contact Me"}>
            <div className="contact-form">
                <form onSubmit={handleSubmit}>
                    <div className="name">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" placeholder="Hi there.." value={name} onChange={handleNameChange} onBlur={handleBlur} required />
                    </div>
                    <div className="email">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" placeholder="your email.." value={email} onChange={handleEmailChange} onBlur={handleBlur} required />
                    </div>
                    <textarea name="message" id="message" placeholder="your message.." value={message} onChange={handleMessageChange} onBlur={handleBlur} required></textarea>

                    <div className="alertMessage">
                        <p>{alert}</p>
                    </div>

                    <input type="submit" value="send" className="send-btn" />
                </form>
            </div>
        </SubTitle>
    );
}

export default Contact;