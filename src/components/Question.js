import '../css/Question.css'
import Accordion from 'react-bootstrap/Accordion'


const Question = (question) => {

    const q = question.question
    console.log("Q: " + q.question)
    return (
    
        
            <Accordion defaultActiveKey="1">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>{q.question}</Accordion.Header>
                    <Accordion.Body>
                        {q.thoughts}
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        
        
    );
  }
  
  export default Question;