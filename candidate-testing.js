// Instructions from Phillip: delete before submitting code
// Use your code and set all the variables below
// besides setting the variables, only put code inside the functions: 
// functions to complete: askForName(), askQuestion(), gradeQuiz(candidateAnswers)

const input = require('readline-sync');

// TODO 1.1a: Define candidateName // 
let candidateName = input.question("Enter your name: ");
  // console.log("Greetings", candidateName);

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question  = input.question("Who was the first American woman in space? ");
let correctAnswer = "Sally Ride";
let candidateAnswer = (" ");


//TODO: Variables for Part 2
let questions = input.question["Who was the first American woman in space? ",
"True or false: 5 kilometer == 5000 meters? ",
"(5 + 3)/2 * 10 = ? ",
"Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
"What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"]; 
let candidateAnswers = [ ];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
    input.question("Enter your name: ");
    return candidateName
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
    input.question(question);
    return candidateAnswer

}
// TODO 2: modify your quiz app to ask 5 questions //


function gradeQuiz(candidateAnswers) {
 
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 

  // for (let i = 0; i < candidateAnswers.length; i++) {
    if (candidateAnswers.toLowerCase().toUpperCase() === correctAnswers.toLowerCase().toUpperCase()) {
      console.log(`Correct! ${candidateAnswers} ${correctAnswers}`);
    } else
      console.log(`Incorrect. ${candidateAnswers} The correct answer is: ${correctAnswers}`);
    }
  


  // let grade;  //TODO 3.2 use this variable to calculate the candidates score.

  let grade = (correctAnswers / (questions.length)) * 100;
  // console.log(`>>> Overall Grade: ${grade.toFixed(2)}% (${score} of ${questions.length * 20} points)<<<`);
  // console.log(grade >= 80 ? ">>> Status: PASSED <<<" : ">>> Status: Failed <<<");
  let correctAnswers = 20
  return grade;




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

/////////////////////////////////////////////////////////////End template from Phillip: can delete this before submiting










// const input = require ('readline-sync');

// TODO 1.1a: Define candidateName // 


// TODO 1.1b: Ask for candidate's name //

// TODO 1.1c: Greet candidate using their name //
  // console.log("Greetings", candidateName);

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
// let question
// let correctAnswer ;


   // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  // function askQuestions(questions, correctAnswers) {

  //   for (let i = 0; i < questions.length; i++) {
  //     console.log(`${i+1}) ${questions[i]}`);
  //     let userAnswer = input.question("Your Answer: ").toLowerCase().toUpperCase();
  //     let correctAnswer = correctAnswers[i].toString().toLowerCase().toUpperCase();

  //     candidateAnswers.push(userAnswer);
  //     console.log(`Correct Answer: ${correctAnswers[i]}\n`);
  //   }
  //   return candidateAnswers;
  // }

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  //   if (candidateAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
  //     console.log("Correct!");
  //   } else {
  //     ;
  //   }
  // }
  

// function askQuestions(questions) {
//   let candidateAnswers = [];
  // if (candidateAnswers.toLowerCase() == correctAnswers[i]){
  //   grade + 20;
  // } else (candidateAnswers == "" || candidateAnswers == 0)
//   for (let i = 0; i < questions.length; i++) {
//     let answer = input.question(questions[i]);
//     if(!isNaN(answer)) {
//     answer = parseFloat(answer);
//   }
//     candidateAnswers.push(answer);
//   }

//   return candidateAnswers;
// }

// let questions=0
// let candidateAnswers=0
// grade = (questions/candidateAnswers) * 100;

// function gradeQuiz(candidateAnswers, correctAnswers) {

//   return correctAnswersCount;
  // let grade = (correctAnswersCount / (questions.length)) * 100;
  // return grade;
// }


// function runProgram() {
//   let candidateName = askForName();
//   let candidateAnswers = askQuestions(questions, correctAnswers);
//   let score = gradeQuiz(candidateAnswers, correctAnswers);

//   console.log(`\nCandidate Name: ${candidateName}\n`);

//   for (let i = 0; i < questions.length; i++) {
//     console.log(`${i +1}) ${questions[i]}`);
//     console.log(`Your Answer: ${candidateAnswers[i]}`);
//     console.log(`Correct Answer: ${correctAnswers[i]}\n`);
//   }


// }
 // let totalPoints = gradeQuiz(candidateAnswers);
  // console.log("Greetings", candidateName, 'if your grade is 80 or above you have passed the Quiz, you grade is, ', grade);
  // console.log("your grade is: ", grade);
  // if (grade >= 80) {
  //   console.log("You passed the quiz.");
  // } else {
  //   console.log("You did not pass the quiz.");
  // }

//TODO: Variables for Part 2
// let questions 
// let correctAnswers ;



// ----------- Don't write any code or change any code below this line ---------- //
// module.exports = {
//   candidateName: candidateName,
//   question: question,
//   correctAnswer: correctAnswer,
//   candidateAnswer: candidateAnswer,
//   questions: questions,
//   correctAnswers: correctAnswers,
//   candidateAnswers: candidateAnswers,
//   gradeQuiz: gradeQuiz,
//   runProgram: runProgram
// };