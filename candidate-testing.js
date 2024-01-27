const input = require ('readline-sync');

// TODO 1.1a: Define candidateName // 
  let candidateName = input.question("Enter your name: ");
  // console.log("Greetings", candidateName);

// TODO 1.1b: Ask for candidate's name //
  function askForName() {
    return input.question("Enter your name: ");
  }
// TODO 1.1c: Greet candidate using their name //
  console.log("Greetings", candidateName);



// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";


   // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  function askQuestion() {
    let candidateAnswer = input.question(question);
    if (candidateAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
      console.log("Correct!");
    } else {
      console.log("Incorrect. The correct answer is: " + correctAnswer);
    }
  }
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 

  
  
// TODO 2: modify your quiz app to ask 5 questions //
//TODO: Variables for Part 2
let questions = ["Who was the first American woman in space? ",
                 "True or false: 5 kilometer == 5000 meters? ",
                 "(5 + 3)/2 * 10 = ? ",
                 "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
                 "What is the minimum crew size for the ISS? ",
                ];
let correctAnswers = ["Sally Ride",
                      "true",
                      "40",
                      "Trajectory",
                      "3"]


function askQuestions(questions) {
  let candidateAnswers = [];
  // if (candidateAnswers.toLowerCase() == correctAnswers[i]){
  //   grade + 20;
  // } else (candidateAnswers == "" || candidateAnswers == 0)
  for (let i = 0; i < questions.length; i++) {
    let answer = input.question(questions[i]);
    candidateAnswers.push(answer.toLowerCase());
  }

  return candidateAnswers;
}

//3
function gradeQuiz(questions, candidateAnswers) {
  questions=0
  candidateAnswers=0
// grade = (questions/candidateAnswers) * 100;

  let correctAnswersCount = 20;

  for (let i = 0; i < candidateAnswers.length; i++) {
    if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()) {
      correctAnswersCount += 20;
    }
  
  let grade = (correctAnswersCount / (candidateAnswers.length * 20)) * 100;
  return grade;
}
}


function runProgram() {
  let candidateName = askForName();
  let candidateAnswers = askQuestions();
  let totalPoints = gradeQuiz(candidateAnswers);
  let grade = (totalPoints / (candidateAnswers.length * 20)) * 100;

  console.log("Greetings", candidateName, 'if your grade is 80 or above you have passed the Quiz, you grade is, ', grade);

  // console.log("your grade is: ", grade);
  if (grade >= 80) {
    console.log("You passed the quiz.");
  } else {
    console.log("You did not pass the quiz.");
  }
}

// ----------- Don't write any code or change any code below this line ---------- //
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