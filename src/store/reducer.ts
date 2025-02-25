import {ITask, RadioTypes, TaskAction, TaskActionTypes, TodoContextType} from "../types/todo.type.ts";
import {createContext, Dispatch, SetStateAction} from "react";

export const initialState: ITask[] = [
    {
        id: 1,
        text: "Тестовое адание",
        completed: false,
    },
    {
        id: 2,
        text: "Прекрасный код",
        completed: true,
    },
    {
        id: 3,
        text: "Покрытие тестами",
        completed: false,
    },
]

export const reducer = (state: ITask[] = initialState, action: TaskAction): ITask[] => {
    switch (action.type) {
        case TaskActionTypes.ADD_TODO:
            return [...state, action.payload];
        case TaskActionTypes.CHANGE_STATUS:
            return state.map((task: ITask): ITask => {
                if (task.id === action.payload) {
                    task.completed = !task.completed;
                }

                return task;
            })
        case TaskActionTypes.CLEAR_COMPLETED_TASKS:
            return state.filter((task: ITask) => !task.completed)
        default:
            return state;
    }
}

export const TodoContext = createContext<TodoContextType>({
    taskList: initialState,
    dispatch: () => reducer(initialState, {type: TaskActionTypes.CLEAR_COMPLETED_TASKS})
})

export const RadioContext = createContext<{
    value: RadioTypes | null,
    setValue: Dispatch<SetStateAction<RadioTypes | null>>
}>({value: null, setValue: () => null})



