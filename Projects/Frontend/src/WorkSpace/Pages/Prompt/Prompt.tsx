import "./Prompt.css"
import { useNavigate } from "react-router-dom";

function Prompt() {
    const navigate = useNavigate();

    return (
        <div className="PromptBackground">
            <h2>プロンプト</h2>
            <div className="PromptBox">
                <h3>〇〇さん</h3>
                <div className="PromptField">
                    <p>ここにプロンプト書く</p>
                </div>
            </div>
            {/* 名前とプロンプト内容を表示 */}
            <button onClick={() => { navigate("/End"); }} className="PromptButton" type="button">
                戻る
            </button>
        </div>
    )
}

export default Prompt;    