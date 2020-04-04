import React from 'react';
    import styled from 'styled-components'
function Footer(){
    return(
        <FooterContainer  className="main-footer">
        <div className="footer-middle">
    
        <div className="Container">
        <div  className="row">
       
        {/*Colum1*/}
        
        <div className="col ml-5">
        <h6 className="fa fa-phone"> Téléphone:</h6>
        <ul className="list-unstyled">
        <li tiltle= "Telephone" href="#">(+216)72 546 555</li></ul>
        </div>
       
        {/*Colum2*/}
        <div className="col ml-5">
        <h6 className="news">NEW NEWS Web</h6>
        
  
        </div>
          {/*Colum3*/}
        <div className="col">
        <h6 className="fa fa-envelope">Email:</h6>
        <ul className="list-unstyled">
         
            <li title="Email" href="newnews@gmail.com">contact@newnews.tn</li>
            </ul>
         
     </div>
    
        </div>
        <center>
<hr/> 

<div className="footer-bottom">
<p className="col-sm">&copy;{new Date().getFullYear()}Copyright New News Création Amel</p>
</div> </center>
        </div>
        </div>
        </FooterContainer>
    )
}



export default Footer;
const FooterContainer =styled.footer`
.footer-middle{
    background: var(--mainDark);
    padding-top:3rem;
    color: var(--mainWhite);
}
 
    .news{
        width:20px 0,
        padding: 15px;
    }
    

`;