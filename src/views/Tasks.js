import TaskItem from "components/TaskItem"
import { useState } from "react";



export default function Tasks() {
  const [task, setTask] = useState({
    date: '2021-11-29',
    tags: [
      {
        idx: 1,
        name: '#Project A',
        desc: 'TEST DESC!!!!!!!!!!!!!',
        color: '#4695ED'
      },
      {
        idx: 1,
        name: '#Project B',
        desc: 'TEST DESC!!!!!!!!!!!!!',
        color: '#f3a683'
      },
      {
        idx: 1,
        name: '#Project C',
        desc: 'TEST DESC!!!!!!!!!!!!!',
        color: '#596275'
      },
      {
        idx: 1,
        name: '#Project D',
        desc: 'TEST DESC!!!!!!!!!!!!!',
        color: '#cf6a87'
      },
      {
        idx: 1,
        name: '#Project E',
        desc: 'TEST DESC!!!!!!!!!!!!!',
        color: '#63cdda'
      },
      {
        idx: 1,
        name: '#Project F',
        desc: 'TEST DESC!!!!!!!!!!!!!',
        color: '#574b90'
      },

    ]
  });

  return (
    <div>
      <div>
        <h2>TASKS!</h2>
        <ul className="list-box">
          <TaskItem task={task}>test</TaskItem>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
        </ul>
      </div>
    </div>
  );
}