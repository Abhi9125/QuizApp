# React Quiz Application

Welcome! This React Quiz Application is an interactive quiz built with React and styled using Tailwind CSS. It lets users go through multiple-choice questions, keeps track of their score, and gives a summary of results at the end.

## Table of Contents

- Features
- Installation
- Usage
- Project Structure
- How It Works
- Customization
- Acknowledgments

## Features

- Navigate Through Questions: Users can go through quiz questions one at a time.
- Answer Checking: Users select answers, and the app checks them against the correct ones.
- Score Display: After the last question, a total score is shown based on correct answers.
- Result Summary: The app displays the total questions, correct/incorrect answers, and final score.
- Responsive Design: Styled with Tailwind CSS to be responsive and visually clean.

## Installation

To run the app on your local machine:

1. Clone the repository:

```js
git clone <repository-url>
cd react-quiz-app
```

2. Install dependencies:

```js
npm install
```

3. Start the application:

```js
npm start
```

The app will launch at http://localhost:3000.

## Usage

1. When you start the app, the first question will display.
2. Select an answer for each question. The "Next" button will only activate when an answer is chosen.
3. For the final question, the button will read "Finish"—clicking it shows the final results.
4. After the quiz, you'll see a summary with your total score, correct answers, and incorrect answers.

## Project Structure

This app has a few main components:

- App.js: The main component, it initializes and renders the Quiz.
- Quiz.js: Manages the quiz logic, state, and renders each question.
- Question Component (optional improvement): A component to display each question and its choices.

## Key Files

- quizData.js: Holds the questions array, including question text, answer choices, and the correct answer for each question.
- Quiz.js: Handles the main quiz logic, including navigation, answer selection, and result tracking.
- App.js: The root component that renders the quiz.

## How It Works

### State Management

The following useState hooks keep track of quiz progress:

- currentQuestionIndex: Tracks which question is being displayed.
- selectedAnswer: Stores the user’s selected answer.
- score: Stores the user’s total score.
- results: Tracks the number of correct and incorrect answers.
- showResults: Determines whether the app should show the quiz or the final result screen.

### Moving Through Questions

The handleNextQuestion function checks if the answer is correct, updates the score and results, and moves to the next question. If it’s the last question, it displays the results screen.

### Answer Selection

The handleAnswerSelection function is triggered when an answer is clicked, saving the user’s choice.

### Showing the Results

Once the user finishes, showResults is set to true, and a summary screen appears with the total questions, correct and incorrect answers, and the final score.

### Disabling the "Next" Button

The "Next" button is disabled until an answer is selected, so users can’t skip questions accidentally.
