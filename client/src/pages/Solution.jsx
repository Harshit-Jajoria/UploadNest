import React from 'react';
import { useLocation } from 'react-router-dom';
import Footer from '../component/Footer';
import Navbar from '../component/Navbar';

const Solution = () => {
  const location = useLocation();
  const questions = location.state.questions;
  const chosenOption = location.state.chosenOption;
  return (
    <>
    <Navbar/>
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="w-full max-w-3xl bg-gray-200 p-8 rounded-md shadow-md">
        <h1 className="text-4xl font-bold mb-6">Quiz Solution</h1>
        {questions.map((question, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-2xl font-bold mb-4">{question.question}</h2>
            <div className="grid gap-4 md:gap-6">
              {question.options.map((option, optionIndex) => (
                <div
                  key={optionIndex}
                  className={`p-4 border rounded-md ${
                    chosenOption[index] === optionIndex
                      ? optionIndex === question.correctOptionIndex
                        ? 'bg-green-400 text-white'
                        : 'bg-red-400 text-white'
                      : optionIndex === question.correctOptionIndex
                      ? 'bg-green-300'
                      : 'bg-white'
                  }`}
                >
                  {option}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Solution;
