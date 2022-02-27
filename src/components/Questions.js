import { Component } from "react";
import { Link } from "react-router-dom";
import Question from './Question';
import {LandingLink} from './Links'
import data from '../siteData.json'

function Questions() {
    console.log("Questions!!!!!!: "+ typeof data.questions);
    data.questions.forEach(question => {
        console.log("question:" + question)
    })
    return(
        <div className="App">

            <h1>{LandingLink}</h1>

            <p>
                I like to think about broad questions that don't necessarily have a definitive answer, but instead force you
                to think deeply about the topic at hand.
            </p>
    
            {
                        data.questions.map(function (q) {
                
                            return (
                                <div>
                                    <Question question={q}/>
                                </div>
                            );
                        })
                    }

            {/* {
                data.questions.map(question => {
                    return (
                        <div>
                            <p>hello</p>
                            <Question question={question}/>
                        </div>
                        
                    )
                })
            } */}

        </div>
        );
}

export default Questions;