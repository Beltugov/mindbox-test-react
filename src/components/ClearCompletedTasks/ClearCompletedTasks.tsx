import {useContext} from "react";
import {TodoContext} from "../../store/reducer.ts";
import {TaskActionTypes} from "../../types/todo.type.ts";
import Button from "../Button/Button.tsx";


const ClearCompletedTasks = () => {
    const {dispatch} = useContext(TodoContext)

    return (
        <Button onClick={() => dispatch({
            type: TaskActionTypes.CLEAR_COMPLETED_TASKS
        })}/>
    );
};

export default ClearCompletedTasks;