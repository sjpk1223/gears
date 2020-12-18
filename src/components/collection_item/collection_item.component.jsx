import React from 'react';
// should display title, background image and hold otherprops
// imageUrl, name, price
import './collection-item.styles.scss';
const CollectionItem = ({price, imageUrl, name}) => {
    return (
        <div className="collection-item" >
            <div className="image" style={{ backgroundImage: `url(${imageUrl})` }}>

            </div>
            <div className="collection-footer">
                <div className="name">
                    {name}
                </div>
                <div className="price">
                    {price}
                </div>
            </div>
        </div>
    )
}

export default CollectionItem;