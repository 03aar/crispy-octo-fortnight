// Define an array of quiz questions and answers
const questions = [
  { question: 'What is the capital of France?', answer: 'Paris' },
  { question: 'What is the largest planet in our solar system?', answer: 'Jupiter' },
  { question: 'What is the highest mountain in the world?', answer: 'Mount Everest' },
];

// Track the user's score
let score = 0;

// Loop through each question and ask the user for an answer
questions.forEach(question => {
  const answer = prompt(question.question);
  if (answer.toLowerCase() === question.answer.toLowerCase()) {
    score++;
  }
});

// Display the user's score on the page
document.querySelector('.score').innerHTML = `You got ${score} out of ${questions.length} correct!`;
