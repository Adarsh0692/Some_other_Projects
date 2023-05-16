import React from 'react'

const AnswerSection = ({data, currentQuestion, handelInputChange, answer}) => {
    return (
        <div className='answer-section'>
            {data[currentQuestion].answerOption?.map((answerOption, index) => (
                <div key={index}>
                    <input type="radio" name='radioBtn' value={answerOption.anserText} checked={answer === answerOption.anserText} onChange={(e) => handelInputChange(e, answerOption.isCorrect)} />
                    <span>{answerOption.anserText}</span>
                </div>
            ))}
        </div> 
    )
}

export default AnswerSection