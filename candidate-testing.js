// Instructions from Phillip: delete before submitting code
// Use your code and set all the variables below
// besides setting the variables, only put code inside the functions: 
// functions to complete: askForName(), askQuestion(), gradeQuiz(candidateAnswers)

const input = require('readline-sync');

// TODO 1.1a: Define candidateName // 
let candidateName = input.question("Print your name: ");
  // console.log("Greetings", candidateName);

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
  input.question("Print your name: ");
  return candidateName;
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
    input.question(question)
    return candidateAnswer;
}

// TODO 2: modify your quiz app to ask 5 questions //



function gradeQuiz(candidateAnswers) {
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  for (let i = 0; i < questions.length; i++) {
    let answer = prompt(questions[i]);
    candidateAnswers.push(answer);
    for (let i = 0; i < correctAnswers.length; i++) {
      if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()) {
        console.log(`Question ${i + 1}: Correct!`);
      } else {
        console.log(`Question ${i + 1}: Incorrect. Correct answer: ${correctAnswers[i]}`);
      }
    }
   }
  }


  // if (candidateAnswers.toLowerCase() === correctAnswers.toLowerCase()){
//   console.log(`Correct! ${candidateAnswers} + ${correctAnswers}`);
// } else
//   console.log(`Incorrect. ${candidateAnswers} The correct answer is ${correctAnswers}`);
// }

  // let grade;  //TODO 3.2 use this variable to calculate the candidates score.
  let grade = ((correctAnswers * 20)/ questions.length) * 100;

  console.log(`>>> Overall Grade: ${grade.toFixed(2)}% (${grade} of ${questions.length * 20} points)<<<`);
  console.log(grade >= 80 ? ">>> Status: PASSED <<<" : ">>> Status: Failed <<<");

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
