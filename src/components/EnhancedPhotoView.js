import data from '../siteData.json';
import { useParams } from 'react-router-dom';
import {LandingLink} from './Links';
import '../css/Photography.css';
import PhotoDetails from './PhotoDetails';

const EnhancedPhotoView = () => {

    let params = useParams();
    const pic = data.pictures.pictures.find(pic => pic.filename == params.id);
    const path = "/images/" + pic.filename;
    const title = pic.title;

    let details = {
        "title": title,
        "date": pic.date,
        "location": pic.location,
        "description": pic.description
    }

    return (
        <div>
            <div className="enhanced-view">
            <div className="enhanced-view-container">
                <img className="ehnanced-image" src={path} alt={title} ></img>  
            </div>
            <div>
                <PhotoDetails details={details}/>
            </div>
        </div>
        </div>
        
        
 
    );
  }
  
  export default EnhancedPhotoView;