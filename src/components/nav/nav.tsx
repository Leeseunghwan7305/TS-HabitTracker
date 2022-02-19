import React, { useState } from "react";
import { setTextRange } from "typescript";
import styles from "./nav.module.css";
const Nav = (onInsert: void) => {
  let [toggle, setToggle] = useState<boolean>(true);
  let [text, setText] = useState("");
  function changeText(e: React.ChangeEvent<HTMLInputElement>) {
    setText(e.target.value);
  }
  return (
    <div className={styles.nav}>
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        {toggle ? "펼치기" : "감추기"}
      </button>
      <input onChange={changeText} placeholder="여기에 입력해주세요"></input>
      <button onClick={onInsert}>추가하기</button>
    </div>
  );
};

export default Nav;
