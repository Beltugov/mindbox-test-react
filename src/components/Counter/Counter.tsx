import {useContext} from "react";
import {TodoContext} from "../../store/reducer.ts";

import "./Counter.css"


const Counter = () => {
    const {taskList} = useContext(TodoContext)
    return (
        <div className="counter">
            {taskList.length} items left
        </div>
    );
};

export default Counter;