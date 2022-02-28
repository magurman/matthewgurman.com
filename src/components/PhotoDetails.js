
const PhotoDetails = (details) => {


    const title = details.details.title;
    const date = details.details.date;
    const description = details.details.description;


    return (
        <div>
            <div className="details-container">
                <div>
                    <h5>{"title: " + title}</h5>
                </div>
                <div>
                    <h5>{"Date: " + date}</h5>
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