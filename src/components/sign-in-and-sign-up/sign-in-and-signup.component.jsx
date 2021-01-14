import React from 'react';
import SignIn from '../sign_in/sign_in.component';
import SignUp from '../sign_up/sign-up.component';
import './sign-in-and-signup.styles.scss';

export const SignInAndSignUp = () => {
    return (
        <div className='sign-in-and-sign-up'>
            <SignIn />
            <SignUp />
        </div>
    )
}