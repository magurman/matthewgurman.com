import { Component } from "react";

import {LandingLink} from './Links'
import data from '../siteData.json' 
import InProgress from "./InProgress";


class Cuisine extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <InProgress/>
        );
    }
    
}



export default Cuisine;