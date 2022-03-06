import { Component } from "react";

import InProgress from './InProgress'
import data from '../siteData.json'


class Podcasts extends Component {

    constructor(props) {
        super(props);
        this.podcasts = data.podcasts
    }

    render() {
        return(
            <InProgress/>
        );
    }

}

export default Podcasts;