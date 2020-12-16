import React from 'react'; 

const CollectionPreview = ({title, items, id}) => {
    
    return(
        //eventually will return collection item
        <div className="collection-preview">
            <h1 className="title">{title}</h1>
            {items.filter((items,idx) => idx < 4).map(item => {
                return <div key={id} className="preview">{item.name}</div>
            })}
        </div>


    )


}

export default CollectionPreview; 