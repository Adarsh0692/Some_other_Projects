import React,{useState} from 'react'
import data from './data'
import "./App.css"
import ScoreSection from './Components/ScoreSection';
import QuestionSection from './Components/Question';
import NextBtn from './Components/Nextbtn';
import AnswerSection from './Components/Answer';
const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [scrore, setScore] = useState(0);
  const [answer, setAnswer] = useState(null);
  const [correct, setCorrect] = useState(false);

  const handelInputChange = (e, isCorrect) => {
    setAnswer(e.target.value);
    setCorrect(isCorrect);
  }

  const handelNextClick = () => {
    if (correct) {
      setScore(scrore + 1)
      setCorrect(false)
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < data.length) {
      setCurrentQuestion(nextQuestion)
    } else {
      setShowScore(true)
    }
  }

  const handelTryAgain = () => {
    setCurrentQuestion(0);
    setShowScore(false);
    setScore(0)
  }


  return (
    <div >
      {
        showScore ? (
          <ScoreSection scrore={scrore} data={data} handelTryAgain={handelTryAgain} />
        ) : (
          <>
            <QuestionSection currentQuestion={currentQuestion} data={data} />
            <AnswerSection data={data} currentQuestion = {currentQuestion} answer={answer} handelInputChange={handelInputChange} />
            <NextBtn data={data} currentQuestion={currentQuestion} handelNextClick={handelNextClick} />
          </>
        )
      }
    </div>
  )
}

export default App
