import React from 'react';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { Link } from 'react-router-dom';
import './header.styles.scss'
import { auth } from '../../firebase/firebase.utils';

const Header = ({ currentUser, unsubscribeFromAuth}) => {
    return (
        <div className="header">
            <Link className="logo-container" to="/" >
                <Logo className="logo"/>
            </Link>
            <div className="options">
                <Link className="option" to="/shop">
                    SHOP
                </Link>
                <Link className="option" to="/shop">
                    CONTACT
                </Link>
                {
                    currentUser ?
                    // onClick invokes a function so we cannot invoke a func, we must use functional callback
                        <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                    :
                    <Link className='option' to='/signin'>SIGN IN</Link>
                }
            </div>
        </div>
    )
}

export default Header;