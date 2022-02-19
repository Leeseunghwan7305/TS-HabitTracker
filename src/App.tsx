import React, { useState } from "react";
import Nav from "./components/nav/nav";
import Body from "./components/body/body";
import styles from "./app.module.css";

export type Todo = {
  id: number;
  habit: string;
};
function App() {
  const [list, setList] = useState<Todo[]>([
    { id: 1, habit: "코딩하기" },
    { id: 2, habit: "공부하기" },
  ]);
  function onInsert(text: string) {
    const newTodo = [...list];
    let count = newTodo.length;
    newTodo.push({ id: count + 1, habit: text });
    setList(newTodo);
  }

  function Remove(id: number) {
    setList(list.filter((item) => item.id !== id));
  }
  return (
    <div className={styles.app}>
      <Nav onInsert={onInsert}></Nav>
      <Body list={list} Remove={Remove}></Body>
    </div>
  );
}

export default App;
