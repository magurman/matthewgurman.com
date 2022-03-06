import { Component } from "react";

import {LandingLink} from './Links'

import data from '../siteData.json'
import InProgress from "./InProgress";


class Books extends Component {

    constructor(props) {
        super(props);
        this.books = data.books
    }

    render() {
        return(
            <InProgress/>
        );
    }

}

export default Books;