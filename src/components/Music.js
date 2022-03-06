import { Component } from "react";

import InProgress from './InProgress'


class Music extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <InProgress/>
        );
    }
    
}

export default Music;