import React, { useRef, useState } from "react";
import Nav from "./components/nav/nav";
import Body from "./components/body/body";
import styles from "./app.module.css";

export type Todo = {
  id: number;
  habit: string;
};
function App() {
  let [toggle, setToggle] = useState<boolean>(true);
  const [list, setList] = useState<Todo[]>([
    { id: 1, habit: "코딩하기" },
    { id: 2, habit: "공부하기" },
  ]);

  function onInsert(text: string, inputRef: any) {
    const newTodo = [...list];
    let count = newTodo.length;
    newTodo.push({ id: count + 1, habit: text });
    setList(newTodo);
    inputRef.current.focus();
    inputRef.current.value = "";
  }

  function Remove(id: number) {
    setList(list.filter((item) => item.id !== id));
  }

  return (
    <div className={styles.app}>
      <Nav onInsert={onInsert} toggle={toggle} setToggle={setToggle}></Nav>
      {toggle && <Body list={list} Remove={Remove}></Body>}
    </div>
  );
}

export default App;
