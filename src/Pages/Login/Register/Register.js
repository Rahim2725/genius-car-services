import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Register.css'
import auth from '../../../Firebase.init';

const Register = () => {
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

    const navigateLogin = event => {
        navigate("/login")
    }
    if(user){
        navigate('/home')
    }

    const handleRegister = event => {
        event.preventDefault();
        const email = event.target.email.value ;
        const password = event.target.password.value ;
        createUserWithEmailAndPassword(email, password);

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