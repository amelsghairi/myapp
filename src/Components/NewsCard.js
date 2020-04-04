import React from 'react';
import {InfoConsumer} from '../Components/context';
import{Link} from 'react-router-dom'
class NewsCard extends React.Component {

    render() {
        const { id,newsTitle, newsText}= this.props.item;
        return (
        <InfoConsumer> 
             {value => (
                 <div className="card.container. mt-2 mb-3p-5">
                 <div className="card-body">
                 <h5 className="card-title"> {newsTitle}</h5>
                 <p className="card-text ">{newsText}</p>
<Link to="/" className="card-link"> Read More >> 
</Link>
                 </div>
                 </div>
             )
             }
        </InfoConsumer>
        );
    }
}



export default NewsCard;