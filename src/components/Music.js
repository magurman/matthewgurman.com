import { Component } from "react";

import {LandingLink} from './Links'



class Music extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="App">
    
                <h1>{LandingLink}</h1>

                <p>Music!</p>

            </div>
        );
    }
    
}



export default Music;