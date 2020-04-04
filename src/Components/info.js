import React from 'react';
import{ InfoConsumer } from './context';
import {Link}from 'react-router-dom';
class info extends React.Component {

    render() {


        const{
            id, 
            headerTitle,
            headerSubTitle,
            headerText,
            img
        } =this.props.item;
        return (
        <InfoConsumer>
        {value=> (
           <div className="col-10.col-lg-4.mx-auto-mb-5">
            <div className="card" style={{ width:'18rem'}}>
<img src={img}alt={headerTitle}className="card-img-top"/>

<div className ="card-body">
<h3 className ="card-title text-uppercase "> {headerTitle} </h3>
<h5 classeName ="card-title "> {headerSubTitle} </h5>
<p className = "card-text" > {headerText} </p>
<Link onClick = {() => value.handleDetail(id)} 
to="/details"
 className = "btn btn-outline-primary text-uppercase" > MoreInfo </Link>
</div>

            </div>
 
           </div>
 
        )}

        </InfoConsumer>
        
        )
    
    }
}



export default info;