import axios from 'axios';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { BACKEND_URL } from '../constants';
import { useDispatch, useSelector } from 'react-redux';
import { updateScore } from '../state';

const Quiz = () => {
  const location = useLocation();
  const questions = location.state.questions;
  const token = useSelector((state) => state.token);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [chosenOption, setChosenOption] = useState([]);

  const handleOptionSelect = (optionIndex) => {
    setSelectedOption(optionIndex);
  };

  const handleNextQuestion = () => {
    if (selectedOption !== null) {
      if (selectedOption === questions[currentQuestion].correctOptionIndex) {
        setScore((prevScore) => prevScore + 1);
      }
      setChosenOption((prevChosenOption) => [
        ...prevChosenOption,
        selectedOption,
      ]);
      setSelectedOption(null);
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    } else {
      alert('Please select an option before proceeding.');
    }
  };

  const handleShowSolution = async () => {
    console.log(chosenOption);
    const res = await axios.put(
      `${BACKEND_URL}/update-score/${user._id}`,
      { score },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    // dispatch(
    //   updateScore({
    //     updatedScore:res.data.updateScore
    //   })
    // );
    navigate('/solutions', {
      state: { questions: questions, chosenOption: chosenOption },
    });
  };

  if (!questions) return null;

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="w-full max-w-xl bg-gray-200 p-8 rounded-md shadow-md">
        {currentQuestion === questions.length ? (
          <>
            <h1 className="text-3xl font-bold mb-4">Quiz Completed!</h1>
            <p className="text-lg mb-4">
              Your Score: {score} / {questions.length}
            </p>
            <button
              onClick={handleShowSolution}
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Solution
            </button>
          </>
        ) : (
          <>
            <h1 className="text-3xl font-bold mb-4">
              {questions[currentQuestion].question}
            </h1>
            <div className="grid gap-2">
              {questions[currentQuestion].options.map((option, index) => (
                <div
                  key={index}
                  className={`p-4 border border-gray-400 rounded-md cursor-pointer ${
                    selectedOption === index
                      ? 'bg-blue-500 text-white'
                      : 'bg-white'
                  } hover:bg-blue-500 hover:text-white`}
                  onClick={() => handleOptionSelect(index)}
                >
                  {option}
                </div>
              ))}
            </div>
            <button
              onClick={handleNextQuestion}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md disabled:opacity-50"
              disabled={selectedOption === null}
            >
              Next Question
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Quiz;
