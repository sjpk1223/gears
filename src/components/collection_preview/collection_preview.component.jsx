import React from 'react'; 

import './collection_preview.styles.scss'
import CollectionItem from '../collection_item/collection_item.component';

const CollectionPreview = ({title, items, id}) => {
    
    return(
        //eventually will return collection item

        <div className="collection-preview">
            <h1 className="title">{title}</h1>
                <div className="preview">
                    {items.filter((item,idx) => idx < 4).map(({id, ...otherCollectionItemProps}) => {
                        return <CollectionItem key={id} {...otherCollectionItemProps} />
                    })}

                </div>
        </div>


    )


}

export default CollectionPreview; 