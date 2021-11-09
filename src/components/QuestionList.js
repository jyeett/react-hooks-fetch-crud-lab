import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({questions, onDeleteQuestion}) {
  const questionsElems = questions.map(question => <QuestionItem key={question.prompt + question.id} question={question} onDeleteQuestion={onDeleteQuestion}/>)

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionsElems}</ul>
    </section>
  );
}

export default QuestionList;
