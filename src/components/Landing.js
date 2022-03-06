import { Component } from "react";
import {SeedFiLink, BooksLink, MusicLink, PodcastsLink, CuisineLink, QuestionsLink, PhotographyLink, ThinkDeeplyLink} from "./Links"
import data from '../siteData.json'
import { Link } from "react-router-dom";

import '../css/Landing.css'

class Landing extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <div id="landing-container">
                    <div id="landing-content">
                        <p className="landing-p">
                            Hello everyone! Thanks for making it to my website.
                        </p>
                        <p className="landing-p">
                            I'm currently a backend software engineer at <a href={data.links.seedfi} target="_blank" rel="noopener noreferrer">SeedFi</a>.
                        </p>
                        <p className="landing-p">
                            One of my biggest hobbies is shooting {PhotographyLink}.
                        </p>
                        <p className="landing-p">
                            I love <a href="/cuisine">food</a>, both cooking and eating it. My favorite dish is tacos. 
                        </p>
                        <p className="landing-p">
                            Check out some of my favorite <a href="/music">music</a> and what I like so much about it.
                        </p>
                        <p className="landing-p">
                            I listen to a lot of <a href="/podcasts">podcasts</a> and enjoy discussing ones I find interesting with friends. I think podcasts are an underratedly impactful 
                            internet-enabled technology.
                        </p>
                        {/* <p className="landing-p">
                            I don't read as much as I should, but I have some favorite <a href="/books">books</a> and some thoughts to go with them.
                        </p>                         */}
                        <p className="landing-p">
                            Lastly, I wanted a place to keep track of my random <a href="/thoughts">thoughts</a> and muse about some open-ended <a href="/questions">questions</a> I find interesting.
                        </p>
                        <p className="landing-p">
                            Thanks for stopping by, it really does mean a lot. Please reach out if you want to connect!
                        </p>
                    </div>
                    <div id="landing-image">
                        <img id="me" width="350px" src="images/me.png"></img>
                    </div>
                </div>
            </div>
            
        );
    }
}
export default Landing;