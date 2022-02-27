import data from '../siteData.json';
import { useParams } from 'react-router-dom';
import {LandingLink} from './Links';
import '../css/App.css';
import PhotoDetails from './PhotoDetails';

const EnhancedPhotoView = () => {

    let params = useParams();
    const pic = data.pictures.pictures.find(pic => pic.title == params.id);
    const path = "/images/" + pic.filename;
    const title = pic.title;

    let details = {
        "title": title,
        "date": pic.date,
        "description": pic.description
    }

    return (
        <div className="App">
            <div className="enhanced-view-container">
                <h1>{LandingLink}</h1>
            </div>
            <div className="enhanced-view-container">
                <img src={path} alt={title} ></img>  
            </div>
            <div className="enhanced-view-container">
                <PhotoDetails details={details}/>
            </div>
        </div>
        
 
    );
  }
  
  export default EnhancedPhotoView;