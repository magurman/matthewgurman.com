import {LandingLink} from './Links';
import Photo from './Photo';
import { Component } from "react";
import data from '../siteData.json';
import '../css/Photography.css';

class Photography extends Component {

    constructor(props) {
        super(props);
        this.pics = data.pictures.pictures.filter((p => p.active === 'true')).sort((p1, p2) => Date.parse(p2.date) - Date.parse(p1.date));
    }    

    render() {
        return(
            <div>
                <p className="photography-p">{data.pictures.message.p1}</p>
                <p className="photography-p">{data.pictures.message.p2}</p>

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