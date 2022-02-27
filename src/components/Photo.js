import '../css/Photography.css'
import { Link } from "react-router-dom";

const Photo = (picture) => {
    picture = picture.picture;

    const path = "/images/" + picture.filename;
    const date = picture.date
    const title= picture.title;
    const description = picture.description;
    const location = picture.location;

    const imgStyles = {
        width: picture.width,
        height: picture.height
    };


    return (
        <div>
            <Link to={"/photography/" + title}>
                <img className="img-gallery" src={path} alt={title} style={imgStyles}></img>
            </Link>
            
        </div>    
    );
  }
  
  export default Photo;