import React, { useState } from "react";
import quizQuestions from "../Constants/quizData";

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [results, setResults] = useState({
    correct: 0,
    incorrect: 0,
  });
  const [showResults, setShowResults] = useState(false);

  const currentQuestion = quizQuestions[currentQuestionIndex];

  const handleAnswerSelection = (choice) => {
    setSelectedAnswer(choice);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === currentQuestion.correctAnswer) {
      setScore(score + 5); // each correct answer is worth 5 points
      setResults((prevResults) => ({
        ...prevResults,
        correct: prevResults.correct + 1,
      }));
    } else {
      setResults((prevResults) => ({
        ...prevResults,
        incorrect: prevResults.incorrect + 1,
      }));
    }

    setSelectedAnswer(null);

    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setResults({ correct: 0, incorrect: 0 });
    setShowResults(false);
  };

  return (
    <div>
      <h1 className="bg-gradient-to-r from-purple-500 to-pink-500 pt-10 font-extrabold">
        Quiz App
      </h1>
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-pink-500">
        <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
          {showResults ? (
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">Result</h2>
              <p className="text-lg">Total Questions: {quizQuestions.length}</p>
              <p className="text-lg">Total Score: {score}</p>
              <p className="text-lg">Correct Answers: {results.correct}</p>
              <p className="text-lg">Wrong Answers: {results.incorrect}</p>
              <button
                onClick={handleRestartQuiz}
                className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-lg"
              >
                Restart Quiz
              </button>
            </div>
          ) : (
            <div>
              <h2 className="text-lg text-purple-600 font-bold mb-2">
                Question {String(currentQuestionIndex + 1).padStart(2, "0")}/
                {quizQuestions.length}
              </h2>
              <p className="text-xl font-semibold mb-4">
                {currentQuestion.question}
              </p>
              <div className="space-y-2 mb-4">
                {currentQuestion.choices.map((choice, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelection(choice)}
                    className={`w-full p-3 rounded-lg text-left ${
                      selectedAnswer === choice
                        ? "bg-purple-200"
                        : "bg-gray-100 hover:bg-gray-200"
                    }`}
                  >
                    {choice}
                  </button>
                ))}
              </div>
              <button
                onClick={handleNextQuestion}
                disabled={!selectedAnswer}
                className={`w-full py-2 rounded-lg text-white ${
                  selectedAnswer
                    ? "bg-gradient-to-r from-purple-600 to-pink-600"
                    : "bg-gray-400 cursor-not-allowed"
                }`}
              >
                {currentQuestionIndex === quizQuestions.length - 1
                  ? "Finish"
                  : "Next"}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
