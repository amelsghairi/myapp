import React , {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar  from './Components/Navbar/Navbar'
import Footer from './Components/Navbar/Footer'

// React Router 
import { BrowserRouter , Route, Switch  } from 'react-router-dom'
import Home from './Components/Page/Home';
import News from'./Components/Page/News';
import Contacts from './Components/Page/Contacts';
import Details from './Components/Page/Details';
import NotFoundPage from './Components/Page/NotFoundPage';
  

class App extends Component {
  render(){
    return(
     <div> 
<Navbar/>
<Switch>
<Route  exact path="/" component={Home}/>
<Route path="/news" component={News}/>
<Route path="/contacts" component={Contacts}/>
<Route path="/details" component={Details}/>
<Route  component={NotFoundPage}/>
  </Switch>

<Footer/>
      </div>
  );

    }
  }
  

export default App;
