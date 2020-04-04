import React from 'react';
import { InfoConsumer } from '../context'
import Info from '../info';
class Home extends React.Component {


    render() {
        return (



            <div className="container">
            <div className="row mt-5">

            <InfoConsumer>
            {value => {
                return value.info.map(item => {
            return <Info Key = {item.id} item = {item} />
        })
            }}
                  </InfoConsumer>
            </div>
            </div>
    
            );
        
    }
}



export default Home;