import React from "react";
import { createUser } from '../../api/user.api';
import { Link } from 'react-router-dom';


export const SignUp = () => {
    const data =async (event) => {
        event.preventDefault();
        const username = event.target.elements.username.value;
        const password = event.target.elements.password.value;
        const phone = event.target.elements.phone.value;
        const email = event.target.elements.email.value;
        const newuser = {
            username: username,
            password: password,
            phone: phone,
            email: email
        };
        await createUser(newuser);
    }

    return (
        <div>
            <form onSubmit={(e) => data(e)}>
                <label htmlFor="username">Enter username</label>
                <input type="text" id="username" />
                <label htmlFor="password">Enter your password</label>
                <input type="text" id="password" />
                <label htmlFor="phone">Enter your phone number</label>
                <input type="text" id="phone" />
                <label htmlFor="email">Enter your email</label>
                <input type="text" id="email" />
                <button type="submit">Sign Up</button>
                <Link to={'/'}><button type="submit">חזרה לדף הבית</button></Link>
            </form>
        </div>
    )
}
