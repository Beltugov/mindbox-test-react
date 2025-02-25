import TaskInput from "../TaskInput/TaskInput.tsx";
import TasksList from "../TasksList/TasksList.tsx";
import SelectedFilter from "../SelectedFilter/SelectedFilter.tsx";
import "./TodoLayout.css"
import Counter from "../Counter/Counter.tsx";
import ClearCompletedTasks from "../ClearCompletedTasks/ClearCompletedTasks.tsx";

const TodoLayout = () => {
    return (
        <div className="wrapper">
            <div>
                <h1 className="header">todos</h1>
            </div>
            <div className="content">
                <TaskInput/>
                <TasksList/>
                <div className="actions">
                    <Counter/>
                    <SelectedFilter/>
                    <ClearCompletedTasks/>
                </div>
            </div>
        </div>
    );
};

export default TodoLayout;