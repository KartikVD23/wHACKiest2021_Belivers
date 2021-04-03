
import './home.css';
import Header from './header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Pricing from './pricing'
import {Button,Navbar,Nav} from 'react-bootstrap'
import Features from "./features"
import { Link } from 'react-router-dom';


function Home() {
    
  
  return (
    // BEM naming convention

    <div>
   <div className="App">

        <Header/>
    </div>
    
    <Features/>
    
    
    <Pricing/>
    

    </div>
  );
}

export default Home;
