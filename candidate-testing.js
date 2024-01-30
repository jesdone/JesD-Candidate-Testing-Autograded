// Instructions from Phillip: delete before submitting code
// Use your code and set all the variables below
// besides setting the variables, only put code inside the functions: 
// functions to complete: askForName(), askQuestion(), gradeQuiz(candidateAnswers)

const input = require('readline-sync');

// TODO 1.1a: Define candidateName // 
let candidateName = input.question("Enter your name: ");


// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question  = input.question("Who was the first American woman in space? ");
let correctAnswer = "Sally Ride";
let candidateAnswer = (" ");

//TODO: Variables for Part 2
let questions = ["Who was the first American woman in space? ",
                 "True or false: 5 kilometer == 5000 meters? ",
                 "(5 + 3)/2 * 10 = ? ",
                 "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
                 "What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride",
                      "true",
                      "40",
                      "Trajectory",
                      "3"]
let candidateAnswers = [ ];

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  input.question(candidateName);
  // console.log("Greetings", candidateName);
  return candidateName
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
    candidateAnswer = input.question("Who was the first American woman in space? ");
    return candidateAnswer;
}

function gradeQuiz(candidateAnswers) {
  let correctCount = 0
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  for (let i = 0; i < questions.length; i++) {
    let answer = input.question(questions[i].toLowerCase());
    candidateAnswers.push(answer);
      if (answer === correctAnswers[i].toLowerCase()) {
        console.log(`Question ${i + 1}: Correct!`);
        correctCount++;
      } else {
        console.log(`Question ${i + 1}: Incorrect. Correct answer: ${correctAnswers[i]}`);
      }
    }
   
  // let grade;  //TODO 3.2 use this variable to calculate the candidates score.
  let grade = (correctCount) / (questions.length) * 100;

  console.log(`>>> Overall Grade: ${grade}% points)<<<`);
  console.log(grade >= 80 ? ">>> Status: PASSED <<<" : ">>> Status: Failed <<<");

  return grade;
  }

// ----------- Don't write any code or change any code below this line ---------- //

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
   console.log();
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}


module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};


