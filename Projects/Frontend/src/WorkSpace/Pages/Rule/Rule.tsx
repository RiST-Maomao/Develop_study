import "./Rule.css"
import { useNavigate } from "react-router-dom";

function Rule() {
    const navigate = useNavigate();

    return (
        <div className="RuleBackground">
            <h2>ルール</h2>
            <div className="RuleBox">
                <p>ここにルール書く</p>
            </div>
            <button onClick={() => { navigate("/"); }} className="RuleButton" type="button">
                閉じる
            </button>
        </div>
    )
}

export default Rule;    