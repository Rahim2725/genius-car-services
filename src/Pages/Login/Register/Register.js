import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'

const Register = () => {
    const navigate = useNavigate();
    const navigateLogin = event => {
        navigate("/login")
    }

    const handleRegister = event => {
        event.preventDefault();
    }

    return (
        <div className='register-form container'>
            <h2 className='text-center text-primary'>Place Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='Your Name'required/>
                <input type="email" name="email" id="" placeholder="Email" required/>
                <input type="password" name="password" id="" placeholder="Password" required />
                <input type="submit" value="Register" required />
            </form>
            <p>Already have account ?<Link to="/login" className='text-danger pe-auto text-decoration-none ' onClick={navigateLogin}> Please Login</Link> </p>
        </div>
    );
};

export default Register;