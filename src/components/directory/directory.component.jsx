import React from 'react';
import { MenuItem } from '../menuitem/menuitem.component';
import './directory.styles.scss';

class Directory extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            sections: [  
                {    title: 'hats',    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',    id: 1,    linkUrl: 'shop/hats'  },
                {    title: 'jackets',    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',    id: 2,    linkUrl: 'shop/jackets'  },  
                {    title: 'sneakers',    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',    id: 3,    linkUrl: 'shop/sneakers'  },  
                {    title: 'womens',    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',    size: 'large',    id: 4,    linkUrl: 'shop/womens'  },  
                {    title: 'mens',    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',    size: 'large',    id: 5,    linkUrl: 'shop/mens'  }]
        }
    }
    // all built in array functions may take a callback whose argument is a single item in the array 
    render(){
        // deconstruct from state
        // if we use curly brackets we must explicitly return on line 23
        const { sections } = this.state;
        return (<div className="directory">
                 {sections.map((section) => {
                    return <MenuItem title={section.title} imageUrl={section.imageUrl}/>
                })}
                </div>)
    }
}

export default Directory;