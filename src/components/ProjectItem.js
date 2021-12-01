import { useState } from "react"
import axios from "axios";

export default function ProjectItem(projectIdx) {
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchProject = async() => {
      try {
        setError(null);
        setProject(null);
        setLoading(true);

        // const response = await axios;
      } catch(e) {
        console.log(e);
        setError(e);
      }
    }

    if (loading) return <div>로딩중..</div>; 
    if (error) return <div>에러가 발생했습니다</div>;
    if (!project) return <button onClick={fetchProject}>Click!</button>;
    return(
      <div>
        <button onClick={fetchProject}>Click!</button>
        {/* <h3>{projectIdx}</h3> */}
        {/* <ul className="tag-wrap">
          {project.tags.map((tag) => {
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
        </ul> */}
      </div>
    )
}
