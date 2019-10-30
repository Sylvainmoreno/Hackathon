import React from 'react'
import QuestionnaireData from './QuestionnaireData' ;

class MainQuestionnaire extends React.Component {
    
        state= {
            currentQuestion: 0,
            myAnswer: [],
            options: [],
            score: 0,

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

};

render() {
    return(
        <>
        <div>
            {this.state.questions}
        </div>
        <div>
            {this.state.options}
        </div>
        </>
    )
}
}
export default MainQuestionnaire;
