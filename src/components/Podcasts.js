import { Component } from "react";

import {LandingLink} from './Links'
import data from '../siteData.json'


class Podcasts extends Component {

    constructor(props) {
        super(props);
        this.podcasts = data.podcasts
    }

    render() {
        return(
            <div className="App">
    
                <h1>{LandingLink}</h1>

                {
                    this.podcasts.map(function (podcast) {
            
                        return (
                            <div>
                                <p>{podcast}</p>
                            </div>
                        );
                    })
                }

            </div>
        );
    }

}

export default Podcasts;