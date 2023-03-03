import React, {useState} from 'react';
import './index.css';

function App() {

  const quests = [
    {
      questText : 'The biggest country in the world?',
      answerOptions : [
        {answerText : 'USA', isCorrect : false},
        {answerText : 'Russia', isCorrect : true},
        {answerText : 'China', isCorrect : false},
        {answerText : 'Germany', isCorrect : false},
      ]
    },

    {
      questText : 'The most titled football club?',
      answerOptions : [
        {answerText : 'Zenit', isCorrect : false},
        {answerText : 'Barcelona', isCorrect : false},
        {answerText : 'Real Madrid', isCorrect : true},
        {answerText : 'Bayern Munich', isCorrect : false},
      ]
    },

    {
      questText : 'The most spoken language in the world?',
      answerOptions : [
        {answerText : 'Russian', isCorrect : false},
        {answerText : 'Chinese', isCorrect : true},
        {answerText : 'English', isCorrect : false},
        {answerText : 'Spanish', isCorrect : false},
      ]
    },

    {
      questText : 'The most popular person?',
      answerOptions : [
        {answerText : 'Elon Musk', isCorrect : true},
        {answerText : 'Ariana Grande', isCorrect : false},
        {answerText : 'Bill Gates', isCorrect : false},
        {answerText : 'Cristiano Ronaldo', isCorrect : false},
      ]
    },
  ]

  const [currentQuest, setCurrentQuest] = useState(0); // По умолчанию стоит нуль.
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const nextQuest = currentQuest + 1;

  const answerOptClick = (isCorrect) =>{
    if (isCorrect = true){
      setScore(score + 1);
    }
  }

  if (nextQuest < quests.length){
    setCurrentQuest(nextQuest)
  } else {
    setShowScore(true);
  }

  return(
    <body>
      <div className="app">
        <div className="quiz">
          <div className="question-block">
            <div className="question-count">
              <span className='user-count'>Quest №{currentQuest + 1}</span> <span className='all-count'>/ {quests.length}</span>
            </div>
            <div className="question-text">
            {quests[currentQuest].questText}
            </div>
          </div>
          <div className="answer-block">
            {quests[currentQuest].answerOptions.map(item => // Из переменной с вопросами находим нужные данные.находим ответы и с помошью .map выводим каждый из них
              (<button onClick={() => answerOptClick(item.isCorrect)}>{item.answerText}</button>) // item (цифра), всего ответа 4, так что цифры будет 4. 1 - ответ, 2 - ответ, 3 - ответ, 4 - ответ.
            )}
          </div>
        </div>
      </div>
      <footer>
        &copy; Alexander Kuznecov 2023
      </footer>
    </body>
  )
}

export default App;
