
const PhotoDetails = (details) => {


    const title = details.details.title;
    const date = details.details.date;
    const location = details.details.location;
    const description = details.details.description;


    return (
        <div>
            <div className="details-container">
                <div>
                    <h4>{"Title: " + title}</h4>
                    <h4>{"Date: " + date}</h4>
                    <h4>{"Location: " + location}</h4>
                </div>
            </div>
            <div className="description">
                 <div className="description-container">
                    <p>{description}</p>
                 </div>
            </div>
        </div>
        
    );
  }
  
  export default PhotoDetails;