import {useContext} from "react";

import List from "../List/List.tsx";
import {TodoContext} from "../../store/reducer.ts";

const TasksList = () => {
    const {taskList} = useContext(TodoContext)

    return (
        <List taskList={taskList}/>
    );
};

export default TasksList;