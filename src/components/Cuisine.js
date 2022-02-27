import { Component } from "react";

import {LandingLink} from './Links'
import data from '../siteData.json' 


class Cuisine extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="App">
    
                <h1>{LandingLink}</h1>

                <p>Cuisine!</p>

            </div>
        );
    }
    
}



export default Cuisine;