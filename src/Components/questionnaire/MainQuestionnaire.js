import React from 'react';
import QuestionnaireData from './QuestionnaireData' ;
import './Questionnaire.css';

class MainQuestionnaire extends React.Component {
    
        state= {
            currentQuestion: 0,
            myAnswer: [],
            options: [],
            score: 0,
            isEnd: false,

        };

        loadQuestionnaireData = () => {
            const {currentQuestion} = this.state;
            this.setState (() => {
                return {
                    questions: QuestionnaireData[currentQuestion].question,
                    options: QuestionnaireData[currentQuestion].options,
                };
            });
        };
   


componentDidMount() {
    this.loadQuestionnaireData();
};

nextQuestionHandler = () => {
    this.setState({
        currentQuestion: this.state.currentQuestion + 1
    })
    console.log(this.state.currentQuestion)
}

componentDidUpdate(prevProps, prevState){
    const {currentQuestion} = this.state;
    if(this.state.currentQuestion !== prevState.currentQuestion){
        this.setState(() => {
            return{
                questions: QuestionnaireData[currentQuestion].question,
                options: QuestionnaireData[currentQuestion].options,
            };
        })
    }
}

checkAnswer = answer => {
    this.setState({
        userAnswer: answer
    })
}

finishHandler = () => {
    if(this.state.currentQuestion === QuestionnaireData.length -1){
        this.setState({
            isEnd: true
        })
    }
}

render() {
    const {questions, options, currentQuestion , userAnswer, isEnd} = this.state;
        if(isEnd){
            return(
                <div>
                    <h1>YOUR PERSO IS</h1>
                </div>
            )
        }
    return(
        <>
            <h3>{`Questions ${currentQuestion} out of ${QuestionnaireData.length - 1}`} </h3>
            <div>
                 <h2>{questions}</h2>
            </div>
            <div>
                {options.map(option =>
                <p
                key={option.id}
               
                className= {`ui floating message options
                ${userAnswer === option ? "selected": null }`}
                onClick= {() => this.checkAnswer(option)}
                >
                 {option}   
                </p>)}
            </div>

                {currentQuestion < QuestionnaireData.length - 1 && 
                <button 
                onClick= {this.nextQuestionHandler}>
                    Next
                </button>}

                {currentQuestion === QuestionnaireData.length - 1 &&
                <button
                onClick= {this.finishHandler}>FINISH</button>
                }
        </>
    )
}
}
export default MainQuestionnaire;
