import {ActionDispatch} from "react";

export interface ITask {
    id: number
    text: string,
    completed: boolean,
}

export enum TaskActionTypes {
    ADD_TODO = "addTodo",
    CHANGE_STATUS = "changeStatus",
    CLEAR_COMPLETED_TASKS = "clearCompletedTasks",
}

interface IAddTask {
    type: TaskActionTypes.ADD_TODO;
    payload: ITask
}

interface IChangeStatus {
    type: TaskActionTypes.CHANGE_STATUS;
    payload: ITask['id']
}

interface IClearCompletedTasks {
    type: TaskActionTypes.CLEAR_COMPLETED_TASKS;
}

export type TaskAction = IAddTask | IChangeStatus | IClearCompletedTasks

export interface TodoContextType {
    taskList: ITask[],
    dispatch: ActionDispatch<[action: TaskAction]>
}

export type RadioTypes = "Completed" | "Active"