import {ITask, TaskActionTypes} from "../../types/todo.type.ts";
import Block from "../Block/Block.tsx";
import {useContext} from "react";
import {TodoContext} from "../../store/reducer.ts";

const Task = ({task}: { task: ITask }) => {
    const {dispatch} = useContext(TodoContext)

    function changeStatus() {
        dispatch({
            type: TaskActionTypes.CHANGE_STATUS, payload: task.id
        })
    }

    return (
        <Block task={task} onChange={changeStatus}/>
    );
};

export default Task;