const input = require ('readline-sync');

// TODO 1.1a: Define candidateName // 
  // let candidateName = input.question("Enter your name: ");
  // console.log("Greetings", candidateName);

// TODO 1.1b: Ask for candidate's name //
  function askForName() {
    return input.question("Enter your name: ");
  }
// TODO 1.1c: Greet candidate using their name //
  // console.log("Greetings", candidateName);



// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
// let question = "Who was the first American woman in space? ";
// let correctAnswer = "Sally Ride";


   // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  function askQuestions(questions, correctAnswers) {
    let candidateAnswer = [];

    for (let i = 0; i < questions.length; i++) {
      console.log(`${i+1}) ${questions[i]}`);
      let candidateAnswer = input.question("Your Answer: ").toLowerCase();
      let correctAnswer = correctAnswers[i].toString().toLowerCase();

      candidateAnswers.push(candidateAnswer);
      console.log(`Correct Answer: ${correctAnswers[i]}\n`);
    }
    return candidateAnswers;
  }

  //   if (candidateAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
  //     console.log("Correct!");
  //   } else {
  //     console.log("Incorrect. The correct answer is: " + correctAnswer);
  //   }
  // }
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 

  
  
// TODO 2: modify your quiz app to ask 5 questions //
//TODO: Variables for Part 2


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

//3


// let questions=0
// let candidateAnswers=0
// grade = (questions/candidateAnswers) * 100;

function gradeQuiz(candidateAnswers, correctAnswers) {
  let correctAnswersCount = 0;

  for (let i = 0; i < candidateAnswers.length; i++) {
    if (candidateAnswers[i] === correctAnswers[i].toString().toLowerCase()) {
      correctAnswersCount += 1;
    }
  }
  let grade = (correctAnswersCount / (questions.length)) * 100;
  return grade;
}


function runProgram() {
  let candidateName = askForName();
  let candidateAnswers = askQuestions(questions, correctAnswers);
  // let totalPoints = gradeQuiz(candidateAnswers);
  let grade = gradeQuiz(candidateAnswers, correctAnswers);

  console.log(`>>> Overall Grade: ${grade}% (${correctAnswersCount} of ${questions.length} responses correct)<<<`);
  console.log(grade >= 80 ? ">>> Status: PASSED <<<" : ">>> Status: Failed <<<");
}
  // console.log("Greetings", candidateName, 'if your grade is 80 or above you have passed the Quiz, you grade is, ', grade);
  // console.log("your grade is: ", grade);
  // if (grade >= 80) {
  //   console.log("You passed the quiz.");
  // } else {
  //   console.log("You did not pass the quiz.");
  // }

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
                      "3"
];

runProgram();


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