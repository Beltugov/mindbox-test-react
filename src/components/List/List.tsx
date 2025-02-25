import {ITask} from "../../types/todo.type.ts";
import Task from "../Task/Task.tsx";

const List = ({taskList}: { taskList: ITask[] }) => {
    return (
        <>
            {taskList.map((task) => (
                <Task key={task.id}  task={task}/>
            ))}
        </>
    );
};

export default List;