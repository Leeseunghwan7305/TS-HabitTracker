import React, { useState } from "react";
import styles from "./body.module.css";
import { Todo } from "../../App";
type props = {
  list: Todo[];
  Remove: (id: number) => void;
};
const Body = ({ list, Remove }: props) => {
  return (
    <div className={styles.box}>
      {list.map((item: Todo) => {
        return (
          <div className={styles.list}>
            <p>습관</p>
            <div>{item.habit}</div>
            <button onClick={() => Remove(item.id)}>삭제하기</button>
          </div>
        );
      })}
    </div>
  );
};

export default Body;
