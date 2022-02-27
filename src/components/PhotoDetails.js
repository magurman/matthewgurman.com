
const PhotoDetails = (details) => {


    const title = details.details.title;
    const date = details.details.date;
    const description = details.details.description;


    return (
        <div>
            <h1>{title}</h1>
            <h2>{date}</h2>
            <h3>{description}</h3>
        </div>
        
    );
  }
  
  export default PhotoDetails;