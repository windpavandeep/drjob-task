import { useEffect, useState } from "react";
import _ from "lodash";
import { ListItem } from "./components";

import "./App.css";
import { useDispatch, useSelector } from "react-redux";

// helper function
const getRandomColor = () => {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const App = () => {
  const { listItem } = useSelector(({ list }) => list);
  const [list, setList] = useState([]);
  const [inputVal, setInputVal] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    setList(listItem);
  }, [listItem]);

  const addItemHandler = () => {
    setList((p) => {
      const updateArr = _.uniq([...p, inputVal]);
      dispatch({
        type: "UPDATE_LIST_ITEM",
        payload: updateArr,
      });
      return updateArr;
    });
    setInputVal("");
  };

  return (
    <div className="contianer">
      <span>TODO List</span>
      <div className="input-container">
        <input
          onChange={(event) => setInputVal(event.target.value)}
          value={inputVal}
          name="task"
          className="input-item"
        />
        <button onClick={addItemHandler} aria-hidden className="btn-item">
          Add new
        </button>
      </div>
      <ul>
        {list.map((i, index) => (
          <ListItem name={i} key={index} color={getRandomColor()} />
        ))}
      </ul>
    </div>
  );
};

export default App;
