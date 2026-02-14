import "./GrowButton.css"

type GrowButton = {
    label: string;
    onClick?: () => void;
    className: string;
    type?: "button" | "submit" | "reset";
}

const GrowButton = ({ label, onClick, className, type }: GrowButton) => {
    return (
        <button onClick={onClick} className={className} type={type}>
            <p>{label}</p>
        </button>
    )
}
export default GrowButton;