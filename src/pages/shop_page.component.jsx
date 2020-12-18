import React from 'react'; 
import {SHOP_DATA} from './shop_data'; 
import CollectionPreview from '../components/collection_preview/collection_preview.component'

class ShopPage extends React.Component{
    constructor(props){
        super(props); 

        this.state = {
            collections: SHOP_DATA
        }
    }

    render(){
        const {collections} = this.state; 

        return <div className="shop-page">
            {collections.map(({id, ...otherCollectionKeys} /*collections*/)=> {
                
                return <CollectionPreview key={id} {...otherCollectionKeys}/> 
            })}
        </div>
            


        

    }


}

export default ShopPage; 