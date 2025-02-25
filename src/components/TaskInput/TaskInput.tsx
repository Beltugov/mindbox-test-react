import {ChangeEvent, KeyboardEvent, useContext, useState} from "react";
import {TaskActionTypes} from "../../types/todo.type.ts";
import {TodoContext} from "../../store/reducer.ts";
import Input from "../Input/Input.tsx";

const TaskInput = () => {
    const {taskList, dispatch} = useContext(TodoContext)
    const [value, setValue] = useState("")

    function addTask(e: KeyboardEvent<HTMLInputElement>) {
        if (e.key === "Enter" && value.trim() !== "") {

            dispatch({
                type: TaskActionTypes.ADD_TODO,
                payload: {
                    id: taskList[taskList.length - 1]?.id + 1,
                    text: value,
                    completed: false,
                }
            })

            setValue("")
        }
    }

    return (
        <Input value={value} onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
               addTask={addTask}/>
    );
};

export default TaskInput;