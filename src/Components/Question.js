import React from 'react'

const QuestionSection = ({currentQuestion, data}) => {
    return (
        <div className='question-section'>
            <div>
                <span>Question {currentQuestion + 1}</span> / {data.length}
            </div>
            <div className='question-text'>
                {data[currentQuestion].questionText}
            </div>
        </div>
    )
}

export default QuestionSection