import {useReducer, useState} from "react";
import {ITask, RadioTypes, TaskAction,} from "./types/todo.type.ts";
import {initialState, RadioContext, reducer, TodoContext} from "./store/reducer.ts";
import TodoLayout from "./components/TodoLayout/TodoLayout.tsx";

function App() {
    const [taskList, dispatch] = useReducer<ITask[], [action: TaskAction]>(reducer, initialState)
    const [radioValue, setRadioValue] = useState<RadioTypes | null>(null)

    return (
        <RadioContext value={{value:radioValue, setValue:setRadioValue}}>
            <TodoContext value={{
                dispatch, taskList: taskList.filter((task) => {
                    switch (radioValue) {
                        case "Completed":
                            return task.completed && task;
                        case "Active":
                            return !task.completed && task;
                        default:
                            return task
                    }
                })
            }}>
                <TodoLayout/>
            </TodoContext>
        </RadioContext>
    )
}

export default App
