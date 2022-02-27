import { Component } from "react";

import {LandingLink} from './Links'

import data from '../siteData.json'


class Books extends Component {

    constructor(props) {
        super(props);
        this.books = data.books
    }

    render() {
        return(
            <div className="App">
    
                <h1>{LandingLink}</h1>

                {
                    this.books.map(function (book) {
            
                        return (
                            <div>
                                <p>{book}</p>
                            </div>
                        );
                    })
                }

            </div>
        );
    }

}

export default Books;