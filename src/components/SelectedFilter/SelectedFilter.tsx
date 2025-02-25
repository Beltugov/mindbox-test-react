import {useContext} from "react";
import {RadioContext} from "../../store/reducer.ts";
import RadioInput from "../RadioInput/RadioInput.tsx";


const SelectedFilter = () => {
    const {value, setValue} = useContext(RadioContext);

    return (
        <div className="todo__filters">
            <RadioInput name={"All"} value={value} setValue={() => setValue(null)}/>
            <RadioInput name={"Active"} value={value} setValue={() => setValue("Active")}/>
            <RadioInput name={"Completed"} value={value} setValue={() => setValue("Completed")}/>
        </div>
    );
};

export default SelectedFilter;