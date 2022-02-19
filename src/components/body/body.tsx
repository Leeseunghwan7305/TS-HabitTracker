import React, { useState } from "react";
import styles from "./body.module.css";
import { Todo } from "../../App";
type props = {
  list: Todo[];
  Remove: (id: number) => void;
};
const Body = ({ list, Remove }: props) => {
  return (
    <div>
      {list.map((item: Todo) => {
        return (
          <div>
            <div>{list.id}</div>
            <div>{list.habit}</div>
            <button onClick={Remove}>삭제하기</button>
          </div>
        );
      })}
    </div>
  );
};

export default Body;
