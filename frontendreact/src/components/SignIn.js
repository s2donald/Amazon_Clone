
import { Link } from 'react-router-dom';
import React, { useState } from 'react'
// import logo from './amazon_logo_blk.png'
import './SignIn.css'

function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = function(e) {
        e.preventDefault();
        //Sign In Using Django
    }
    const registerFAA = e => {
        e.preventDefault();
        console.log('he')
    }

    return (
        <div className='signin'>
            <Link to='/'><img src="https://press.aboutamazon.com/system/files-encrypted/nasdaq_kms/inline-images/Amazon-logo.jpg" className="signin__logo"/></Link>
            <div className="signin__container">
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>

                    <button className='signin__login' onClick={signIn}>Sign In</button>

                </form>
                <p>By signing-in you understand that this is a FAKE amazon clone created by Stephen to showcase his react skills! 
                    Purchases made on the site are enabled with Stripe however you will not recieve any products purchased as they do not exist!
                </p>
                <button onClick={registerFAA} className='signin__register'>Create your fake Amazon Account</button>
            </div>
        </div>
    )
}

export default SignIn
