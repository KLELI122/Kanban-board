import { useState, useEffect } from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Main from "./components/main/Main";

function App() {
  localStorage.clear();
  const initialState = JSON.parse(window.localStorage.getItem("tasks")) || [];
  const [tasks, setTasks] = useState(initialState);

  useEffect(() => {
    window.localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <>
      <Header />
      <Main tasks={tasks} setTasks={setTasks} />
      <Footer tasks={tasks} />
    </>
  );
}

export default App;
