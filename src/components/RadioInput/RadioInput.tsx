import {RadioTypes} from "../../types/todo.type.ts";
import "./RadioInput.css"

const RadioInput = ({name, value, setValue}: {
    name: RadioTypes | "All",
    value: RadioTypes | null,
    setValue: () => void
}) => {

    return (
        <>
            <label className={"filters-option " + ((name === "All" && value === null) || value === name ? "active" : "")} htmlFor={"filter-" + name}>
                <input className="filters-option__input"
                    name="filter" type="radio"
                       id={"filter-" + name}
                       value={name}
                       checked={(name === "All" && value === null) || value === name}
                       onChange={setValue}/>
                {name}
            </label>
        </>
    );
};

export default RadioInput;