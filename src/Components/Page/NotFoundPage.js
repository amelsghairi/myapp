import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components'
class NotFoundPage extends React.Component {

    render() {
        return (<ComponentNoTFound className="container">
        <div className="row">
        <div className="col-md-12">
        <div className="error-details">
        sorry,an error occurred.
        </div>
        <div className="error-actions">
        <Link to="/"  className="btn btn-outline-secondary btn-lg">
        <i className="fas fa-home"/>&nbsp;back
        </Link>
        <Link className="btn btn-outline-primary btn-lg">
        <i className="fas fa-envelope"/>&nbsp;support
        </Link>
        </div>
        </div>
        </div>
        
            </ComponentNoTFound> 
            
            
            );
    }
}


export default NotFoundPage;
const ComponentNoTFound= styled.div`
.error-template{
    padding:40px 15px
    text-align:center;
}
.error_action {
    margin-top:15px;
    margin-bottom:15px;

}
.btn{
    margin-right:10px;
}
`;