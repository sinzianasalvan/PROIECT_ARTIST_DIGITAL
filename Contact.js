import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <div className="Contact">
            <h2>Contact Me</h2>
            <p>Ready to see what we can do for you?</p>

            <form className="Contact-form">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" required />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />
                </div>

                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" rows="5" required></textarea>
                </div>

                <button type="submit" className="submit-button">Send Message</button>
            </form>
        </div>
    );
}
export default Contact;
