import {ITask} from "../../types/todo.type.ts"
import checkSvg from "../../assets/check.svg"

import "./Block.css"

const Block = ({task, onChange}: { task: ITask, onChange: () => void }) => {
    return (
            <label htmlFor={"task-" + task.id} className={"block-label " + (task.completed ? "completed" : "")}>
                <input className="checkbox-input" type="checkbox" defaultChecked={task.completed} id={"task-" + task.id}
                       onChange={onChange}/>
                <div className="check-img">
                    {task.completed && <img src={checkSvg} alt="check"/>}
                </div>
                {task.text}
            </label>

    );
};

export default Block;