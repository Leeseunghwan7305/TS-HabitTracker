import React, { useState, useRef } from "react";
import styles from "./nav.module.css";
type Props = {
  onInsert: (text: string, inputRef: any) => void;
  toggle: boolean;
  setToggle: any;
};
const Nav = ({ onInsert, toggle, setToggle }: Props) => {
  let inputRef = useRef<HTMLInputElement>(null);
  let [text, setText] = useState("");
  function changeText(e: React.ChangeEvent<HTMLInputElement>) {
    setText(e.target.value);
  }
  function Press(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.code == "Enter") {
      onInsert(text, inputRef);
    }
  }
  return (
    <div className={styles.nav}>
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        {toggle ? "감추기" : "펼치기"}
      </button>
      <input
        ref={inputRef}
        onChange={changeText}
        placeholder="여기에 입력해주세요"
        onKeyPress={(e) => Press(e)}
      ></input>
      <button onClick={() => onInsert(text, inputRef)}>추가하기</button>
    </div>
  );
};

export default Nav;
