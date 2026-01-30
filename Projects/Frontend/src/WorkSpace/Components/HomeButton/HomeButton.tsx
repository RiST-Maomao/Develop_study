import "./HomeButton.css"

type HomeButton = {
    label: string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
}

const HomeButton = ({label, onClick, type}: HomeButton) => {
    return (
        <button onClick = {onClick} className="HomeButton" type={type}>
            <p>{label}</p>
        </button>
    )
}
export default HomeButton;
