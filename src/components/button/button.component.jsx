import React from 'react'; 
import './button.styles.scss'

export const FormButton = ({children, isGoogleSignIn, ...otherProps}) => {

    return (
        <button 
        className={`${isGoogleSignIn} ? 'google-sign-in' : ''} custom-button `}
        {...otherProps} 
            >
            {children}
        </button>
    )
}