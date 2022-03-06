import { Component } from "react";

import './css/App.css';
import Navbar from './components/Navbar'

import Routing from './Routes'
import Footer from "./components/Footer";

class App extends Component {

  render() {
    return (
        <div className="app-container">
            <Navbar/>
            <div className="clear"></div>
            <Routing/>
            {/* <div id="app-body">
              <Routing/>
            </div> */}
            <div className="clear"></div>
            <Footer/>
         </div>
    );
  }
}

export default App;
