import React from 'react'

const NextBtn = ({handelNextClick, currentQuestion, data}) => {
    return (
        <div className='btn-next-section'>
            <button className='next-btn' onClick={handelNextClick}>{currentQuestion === data.length - 1 ? "Submit" : "Next"}</button>
        </div>
    )
}

export default NextBtn 