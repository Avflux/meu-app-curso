import React from 'react';
import VideoPlayer from './components/VideoPlayer';
import QuizComponent from './components/QuizComponent';

function App() {
  return (
    <div className="App">
      <h1>My Course App</h1>
      <VideoPlayer src="https://www.example.com/sample-video.mp4" />
      <QuizComponent
        question="What is React?"
        options={['A JavaScript library', 'A programming language', 'A database']}
        correctAnswer="A JavaScript library"
      />
    </div>
  );
}

export default App;