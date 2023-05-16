import React from 'react'

const ScoreSection = ({scrore, data, handelTryAgain}) => {
    return (
        <div className='scrore-section'>
            <h1>You scrored {scrore * 2} out of {data.length * 2}</h1>
            {scrore * 2 >= 12 ? <h2>Congratulation You Pass  the Test</h2> : null}
            <button className='btn-tryAgain' onClick={handelTryAgain}>Start Again</button>
        </div>
    )
}

export default ScoreSection