import "./Button.css"

const Button = ({onClick}: {onClick:() => void}) => {
    return (
        <button className="btn" onClick={onClick}>Clear completed task</button>
    );
};

export default Button;