import { useState } from 'react';
import data from './data';
import Questions from './Questions';

const App = () => {
  const [questions, setQuestions] = useState(data);
  const [activeId, setActiveId] = useState(null);

  // Open only one question
  // state value at the app

  const toggleQuestion = (id) => {
    // for close same paragraph
    const newId = id === activeId ? null : id;
    setActiveId(newId);
  };

  return (
    <main>
      <Questions
        questions={questions}
        activeId={activeId}
        toggleQuestion={toggleQuestion}
      />
    </main>
  );
};
export default App;
