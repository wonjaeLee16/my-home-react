export default function TaskCompo({task}) {
  return(
    <li>
      <h3>{task.date}</h3>
      <ul className="tag-wrap">
        {task.tags.map((tag) => {
          console.log(tag);
          return (
            <li style={{backgroundColor: tag.color}}>
              <span className="task-name" >
                {tag.name}
              </span>
              <span style={{backgroundColor: tag.color}} className="task-desc">{tag.desc}</span>
            </li>
          );
        })}
      </ul>
    </li>
  )
}