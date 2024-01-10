//import React, { useState } from 'react';
//import '../styles/QuizPage.css';
//import { Link } from "react-router-dom";
//
//const QuizPage = () => {
//
//  // Added code to change background
//  const [style, setStyle] = useState("light");
//
//      const changeBackground = () => {
//          if (style == "grey" || style == "blue") setStyle("light");
//          else if (style == "blue" || style == "light") setStyle("grey");
//          else setStyle("blue");
//      }
//
//  // ***
//  const [currentQuestion, setCurrentQuestion] = useState(0);
//  const [operand1, setOperand1] = useState(0);
//  const [operand2, setOperand2] = useState(0);
//  const [userAnswer, setUserAnswer] = useState('');
//  const [isCorrect, setIsCorrect] = useState(null);
//  const [correctAnswers, setCorrectAnswers] = useState(0);
//  const [selectedOperationType, setSelectedOperationType] = useState('');
//
//  const calculateGrade = () => {
//    const percentageCorrect = (correctAnswers / 10) * 100;
//    return percentageCorrect;
//  };
//
//  const generateProblem = () => {
//    if (currentQuestion <= 10) {
//      const newOperand1 = Math.floor(Math.random() * 10) + 1;
//      const newOperand2 = Math.floor(Math.random() * 10) + 1;
//
//      switch (selectedOperationType) {
//        case 'addition':
//          setOperand1(newOperand1);
//          setOperand2(newOperand2);
//          break;
//        case 'subtraction':
//          setOperand1(newOperand1 + newOperand2);
//          setOperand2(newOperand2);
//          break;
//        case 'multiplication':
//          setOperand1(newOperand1);
//          setOperand2(newOperand2);
//          break;
//        case 'division':
//          setOperand1(Math.max(newOperand1, newOperand2));
//          setOperand2(Math.min(newOperand1, newOperand2));
//          break;
//        default:
//          setOperand1(newOperand1);
//          setOperand2(newOperand2);
//      }
//
//      setUserAnswer('');
//      setIsCorrect(null);
//      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
//    } else {
//      setCurrentQuestion(11);
//    }
//  };
//
//  const checkAnswer = () => {
//    let correctAnswer;
//
//    switch (selectedOperationType) {
//      case 'addition':
//        correctAnswer = operand1 + operand2;
//        break;
//      case 'subtraction':
//        correctAnswer = operand1 - operand2;
//        break;
//      case 'multiplication':
//        correctAnswer = operand1 * operand2;
//        break;
//      case 'division':
//        correctAnswer = operand1 / operand2;
//        break;
//      default:
//        correctAnswer = operand1 + operand2;
//    }
//
//    const userEnteredAnswer = parseFloat(userAnswer);
//
//    if (!isNaN(userEnteredAnswer) && userEnteredAnswer === correctAnswer) {
//      setIsCorrect(true);
//      setCorrectAnswers((prevCorrectAnswers) => prevCorrectAnswers + 1);
//    } else {
//      setIsCorrect(false);
//    }
//
//    generateProblem();
//  };
//
//  const restartQuiz = () => {
//    setCurrentQuestion(0);
//    setCorrectAnswers(0);
//    setSelectedOperationType('');
//  };
//
//  return (
//    <div className='quiz-page'>
//      {currentQuestion === 0 ? (
//        <div>
//          <label>Select Operation Type:</label>
//          <select value={selectedOperationType} onChange={(e) => setSelectedOperationType(e.target.value)}>
//            <option value=''>Select Type</option>
//            <option value='addition'>Addition</option>
//            <option value='subtraction'>Subtraction</option>
//            <option value='multiplication'>Multiplication</option>
//            <option value='division'>Division</option>
//          </select>
//          <button onClick={() => setCurrentQuestion(1)}>Start Quiz</button>
//          <br></br>
//          <br></br>
//          <br></br>
//          <Link to={"/flashcards/addFlashcard"}>Flashcards</Link>
//          <br></br>
//          <Link to={"/resources"}>Resources</Link>
//          <br></br>
//          <Link to={"/rating"}>Rate our page</Link>
//          <br></br>
//        </div>
//      ) : (
//        <>
//          <h1>Math Quiz</h1>
//          {currentQuestion <= 10 && (
//            <>
//              <p>
//                Question {currentQuestion}:
//                <br />
//                {operand1}{' '}
//                {selectedOperationType === 'division'
//                  ? '÷'
//                  : selectedOperationType === 'multiplication'
//                  ? '×'
//                  : selectedOperationType === 'subtraction'
//                  ? '-'
//                  : '+'}{' '}
//                {operand2} =
//              </p>
//              <input
//                type='text'
//                value={userAnswer}
//                onChange={(e) => setUserAnswer(e.target.value)}
//                placeholder='Your Answer'
//              />
//              <button onClick={checkAnswer}>Submit Answer</button>
//              <button onClick={generateProblem}>Next Problem</button>
//
//              {isCorrect === true && <p style={{ color: 'green' }}>Correct! 🎉</p>}
//              {isCorrect === false && <p style={{ color: 'red' }}>Incorrect. Try again! ❌</p>}
//            </>
//          )}
//
//          {currentQuestion > 10 && (
//            <div>
//              <p>Quiz completed! You answered all 10 questions.</p>
//              <p>Your grade: {calculateGrade()}%</p>
//              <button onClick={restartQuiz}>Try Another Quiz</button>
//            </div>
//          )}
//        </>
//      )}
//      <Link to="/">Go to HomePage</Link>
//    </div>
//  );
//};
//
//export default QuizPage;

import React, { useState } from 'react';
import '../styles/QuizPage.css';
import { Link } from 'react-router-dom';

const QuizPage = () => {
  const [style, setStyle] = useState("light");

  const changeBackground = () => {
    if (style === "grey" || style === "blue") setStyle("light");
    else if (style === "blue" || style === "light") setStyle("grey");
    else setStyle("blue");
  }

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [operand1, setOperand1] = useState(0);
  const [operand2, setOperand2] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [selectedOperationType, setSelectedOperationType] = useState('');

  const calculateGrade = () => {
    const percentageCorrect = (correctAnswers / 10) * 100;
    return percentageCorrect;
  };

  const generateProblem = () => {
    if (currentQuestion <= 10) {
      const newOperand1 = Math.floor(Math.random() * 10) + 1;
      const newOperand2 = Math.floor(Math.random() * 10) + 1;

      switch (selectedOperationType) {
        case 'addition':
          setOperand1(newOperand1);
          setOperand2(newOperand2);
          break;
        case 'subtraction':
          setOperand1(newOperand1 + newOperand2);
          setOperand2(newOperand2);
          break;
        case 'multiplication':
          setOperand1(newOperand1);
          setOperand2(newOperand2);
          break;
        case 'division':
          setOperand1(Math.max(newOperand1, newOperand2));
          setOperand2(Math.min(newOperand1, newOperand2));
          break;
        default:
          setOperand1(newOperand1);
          setOperand2(newOperand2);
      }

      setUserAnswer('');
      setIsCorrect(null);
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    } else {
      setCurrentQuestion(11);
    }
  };

  const checkAnswer = () => {
    let correctAnswer;

    switch (selectedOperationType) {
      case 'addition':
        correctAnswer = operand1 + operand2;
        break;
      case 'subtraction':
        correctAnswer = operand1 - operand2;
        break;
      case 'multiplication':
        correctAnswer = operand1 * operand2;
        break;
      case 'division':
        correctAnswer = operand1 / operand2;
        break;
      default:
        correctAnswer = operand1 + operand2;
    }

    const userEnteredAnswer = parseFloat(userAnswer);

    if (!isNaN(userEnteredAnswer) && userEnteredAnswer === correctAnswer) {
      setIsCorrect(true);
      setCorrectAnswers((prevCorrectAnswers) => prevCorrectAnswers + 1);
    } else {
      setIsCorrect(false);
    }

    //generateProblem();
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setCorrectAnswers(0);
    setSelectedOperationType('');
  };

  return (
    <div className={`quiz-page ${style}`}>
      {currentQuestion === 0 ? (
        <div className="start-quiz-container">
        <p style={{textAlign: "center", fontSize: "40px", color: "Green"}}> Are You Ready??  Let's Begin!!</p>
          <label>Your Options: </label>
          <select
            value={selectedOperationType}
            onChange={(e) => setSelectedOperationType(e.target.value)}
          >
            <option value=''>Select Type</option>
            <option value='addition'>Addition</option>
            <option value='subtraction'>Subtraction</option>
            <option value='multiplication'>Multiplication</option>
            <option value='division'>Division</option>
          </select>
          <button onClick={() => setCurrentQuestion(1)} style={{ color:"red"}}>Start Quiz</button>
          <br />
          <br />
          <br />

        </div>
      ) : (
        <>
          <h1 style={{ color:"black", fontSize: "50px"}}><u>Math Quiz</u></h1>
          <br />
          <br />
          {currentQuestion <= 10 && (
            <>
              <p style={{ textAlign: "center", fontSize: "30px", color: "navyblue"}}>
                Question {currentQuestion}:
                <br />
                {operand1}{' '}
                {selectedOperationType === 'division'
                  ? '÷'
                  : selectedOperationType === 'multiplication'
                  ? '×'
                  : selectedOperationType === 'subtraction'
                  ? '-'
                  : '+'}{' '}
                {operand2} =
              </p>
              <input
                type='text'
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                placeholder='Your Answer'
                style={{ marginLeft: "620px", textAlign: "center"}}
              />
              <br />
              <br />
              <button onClick={checkAnswer} style={{ marginLeft: "660px"}}>Submit Answer</button>
              <br />
              <br />
              <button onClick={generateProblem} style={{ marginLeft: "665px"}}>Next Problem</button>
              <br />
              <br />

              {isCorrect === true && (
                <p className="correct-answer" style={{ marginLeft: "580px", fontSize: "30px"}}>Hurray, You got it right!! 🎉</p>
              )}
              {isCorrect === false && (
                <p className="incorrect-answer" style={{ marginLeft: "580px", fontSize: "30px"}}>Oh noo!! Try again! ❌</p>
              )}
            </>
          )}

          {currentQuestion > 10 && (
            <div className="quiz-completed-container">
              <p>Quiz completed! You answered all 10 questions.</p>
              <p>Your grade: {calculateGrade()}%</p>
              <button onClick={restartQuiz} style={{ color:"red"}}>Try Another Quiz</button>
                                  </div>
                                )}
                              </>
                            )}
                            <br />
                            <br />
                             <Link to={"/flashcards/addFlashcard"} className="nav-link">Go to Flashcards</Link>

                                      <Link to={"/resources"} className="nav-link">Go to Resources</Link>
                                      <Link to="/" className="nav-link">Go to HomePage</Link>
                                      <Link to={"/rating"} className="nav-link">Rate our page</Link>


                          </div>
                        );
                      };

                      export default QuizPage;
