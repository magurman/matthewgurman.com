import {LandingLink} from './Links';
import Photo from './Photo';
import { Component } from "react";
import data from '../siteData.json';
import '../css/Photography.css';

class Photography extends Component {

    constructor(props) {
        super(props);
        this.pics = data.pictures.pictures.sort((p1, p2) => Date.parse(p2.date) - Date.parse(p1.date));
    }    

    render() {
        return(
            <div className="App">

                <h1>{LandingLink}</h1>

                <p>These pictures are all pretty special to me. I love film because each shot counts, and on top 
                    of that I'm usually only taking film pictures on a vacation or during a fun activity with friends and family.
                    Each one has a story behind it, and you can click on each one to learn more about that story.</p>

                <div className="photography-parent">
                    {
                        this.pics.map(function (pic) {
                            return (
                                <div className="photography-child">
                                    <Photo picture={pic}/>
                                </div>
                            );
                        })
                    }
                </div>

            </div>
        );
    }
    
}
export default Photography;