import React from 'react';
import './index.css';

const questions = [
  {
    title: 'HTML - what is it?',
    variants: ['Hyper Text Markup Lang', 'Framework', 'Programming Lang', 'Python library'],
    correct: 0,
  },
  {
    title: 'Who is the author of Python?',
    variants: ['James Gosling', 'Facebook', 'Guido van Rossum', 'Elon Musk'],
    correct: 2,
  },
  {
    title: 'What year was React founded?',
    variants: ['1998', '2009', '2011', '2016'],
    correct: 2,
  },
  {
    title: 'Most used programming language?',
    variants: ['Java', 'JavaScript', 'Go', 'Python'],
    correct: 1 || 3,
  },
  {
    title: 'City of programmers?',
    variants: ['Paris', 'Moscow', 'Berlin', 'San Francisko'],
    correct: 3,
  },
  {
    title: 'What year was Windows founded?',
    variants: ['1975', '1952', '1989', '2000'],
    correct: 0,
  },
  {
    title: 'What are the easiest programming languages ​to get started in IT?',
    variants: ['C / C++', 'JavaScript', 'Python', 'Java'],
    correct: 2,
  },
  {
    title: 'What year was Linux founded?',
    variants: ['2006', '2002', '1995', '1991'],
    correct: 3,
  },
  {
    title: 'Which programming language does not require a ";" at the end of a function?',
    variants: ['Java', 'Python', 'C#', 'Ruby'],
    correct: 3,
  },
  {
    title: 'Which of the following is not a programming language?',
    variants: ['HTML', 'Ruby', 'Python', 'Java'],
    correct: 0,
  },
];

function Result({score, questNums}){
  return (
    <div className='result'>
      <img src="https://cdn-icons-png.flaticon.com/512/4381/4381479.png" alt="firework" />
      <h2>You answered <span style={{color : 'red'}}>{score}</span> out of {questNums} questions</h2>
      <a href='/'>
      <button>Try again</button>
      </a>
    </div>
    
  )
}

function Game({step, question, onClickAnswer}){

  const percentBar = Math.round(step / questions.length * 100);

  return(
    <>
    <div className='progress-bar'>
      <div style={{ width: `${percentBar}%` }} className='bar'></div>
    </div>
    <h1>{question.title}</h1>
    <ul> 
      {question.variants.map((text, index) => ( // Ищем каждый вариант ответа с помошью .map()
        <li onClick={() => onClickAnswer(index)}>{text}</li> // Выведится столько списков, сколько ответов.
      ))}
    </ul>
  </>
  );
};



function App() {
  const questNums = questions.length;
  const [step, setStep] = React.useState(0);
  const question = questions[step];
  const[score, setScore] = React.useState(0);
  const[bar, setBar] = React.useState(0);

  const onClickAnswer = (index) => {
    if (index === question.correct){
      setScore(score + 1);
    }
    setStep(step + 1);
  }
  return(
    <body>
          <div className='Quiz'>
            {
              step != questNums ? <Game step={step} question = {question} onClickAnswer={onClickAnswer}/> : <Result score = {score} questNums = {questNums} />
            }
    </div>
    </body>
  );
}

export default App;