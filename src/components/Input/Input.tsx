import {ChangeEvent, KeyboardEventHandler} from "react";
import "./Input.css"

const Input = ({value, onChange, addTask}: {
    value: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void,
    addTask: KeyboardEventHandler<HTMLInputElement>
}) => {
    return (
        <input data-testid="input" className="input" type="text" placeholder="What needs to be done?"
               value={value}
               onChange={onChange}
               onKeyDown={addTask}/>
    );
};

export default Input;