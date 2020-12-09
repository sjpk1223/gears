import React from 'react';
// style is a html tag property, curly brackets for k&v pair indicates we are about to use JS
// all key value pairs in string are CSS which is why we need to stringify imgUrl on line 6

import './menuitem.styles.scss';

export const MenuItem = ({title, imageUrl}) => {
    return (<div className="menuitem">
            <div className="content" style={{ backgroundImage: 'url(' + imageUrl + ')'} } >
                <h1 className="title">{title}</h1>
                <span className="subtitle">Shop now</span>
            </div>
            </div>)
}

