import React, { useEffect, useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/questions')
    .then(res => res.json())
    .then(data => setQuestions(data))
  }, [])

  function onDeleteQuestion(deletedId) {
    const newquestions = questions.filter(question => deletedId !== question.id)
    // console.log(newquestions)
    setQuestions((questions) => questions = newquestions);
  }

  function onFormSubmit(formData) {
    setQuestions(question => question = [...questions, formData])
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm setQuestions={setQuestions} onFormSubmit={onFormSubmit} /> : <QuestionList questions={questions} onDeleteQuestion={onDeleteQuestion}/>}
    </main>
  );
}

export default App;
