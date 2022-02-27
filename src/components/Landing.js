import { Component } from "react";
import {SeedFiLink, BooksLink, MusicLink, PodcastsLink, CuisineLink, QuestionsLink, PhotographyLink, ThinkDeeplyLink} from "./Links"
import data from '../siteData.json'

class Landing extends Component {

    constructor(props) {
        super(props)
        this.landing = data.landing;
        console.log("LANDING: " + this.landing)
    }

    

    render() {
        return (
            <div className="App">
                <p>
                    Greetings
                </p>
        
                <p>
                    My name is Matthew Gurman. I'm currently a backend engineer at {SeedFiLink}. My favorite {CuisineLink} is Mexican. 
                    I love {MusicLink} that makes me feel strong emotions. Here are some of my favorite {PodcastsLink} episodes. I like to shoot film {PhotographyLink} as a hobby. Oh, and I love to ask 
                    {QuestionsLink} and {ThinkDeeplyLink} about things interest me. I don't read nearly enough, but I do have some favorite {BooksLink}! Please make yourself comfortable, and don't hesitate to reach out 
                    via email or text!
                </p>
                
            </div>
        );
    }
}
export default Landing;