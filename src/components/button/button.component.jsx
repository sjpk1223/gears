import React from 'react'; 
import './button.styles.scss'

export const FormButton = ({children, ...otherProps}) => {

    return (
        <button {...otherProps} className='custom-button'>
            {children}
        </button>
    )
}