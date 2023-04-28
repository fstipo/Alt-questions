import SingleQuestion from './SingleQuestion';

const Questions = ({ questions, activeId, toggleQuestion }) => {
  return (
    <section className="container">
      <h1>questions</h1>
      {questions.map((question) => (
        <SingleQuestion
          key={question.id}
          {...question}
          activeId={activeId}
          toggleQuestion={toggleQuestion}
        />
      ))}
    </section>
  );
};
export default Questions;
