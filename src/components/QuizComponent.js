import React, { useState } from 'react';

   const QuizComponent = ({ question, options, correctAnswer }) => {
     const [selectedAnswer, setSelectedAnswer] = useState(null);
     const [showResult, setShowResult] = useState(false);

     const handleSubmit = () => {
       setShowResult(true);
     };

     return (
       <div>
         <h3>{question}</h3>
         {options.map((option, index) => (
           <div key={index}>
             <input
               type="radio"
               id={`option${index}`}
               name="quiz"
               value={option}
               onChange={() => setSelectedAnswer(option)}
             />
             <label htmlFor={`option${index}`}>{option}</label>
           </div>
         ))}
         <button onClick={handleSubmit}>Submit</button>
         {showResult && (
           <p>
             {selectedAnswer === correctAnswer
               ? 'Correct!'
               : `Incorrect. The correct answer is ${correctAnswer}.`}
           </p>
         )}
       </div>
     );
   };

   export default QuizComponent;