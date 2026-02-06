import "./Wating.css"
import { useNavigate } from "react-router-dom";
import GrowButton from "../../Components/GrowButton/GrowButton";

function Waiting() {
    const navigate = useNavigate();

    return (
            <div className="WaitingBackground">
                <h2>待機中…</h2>
                {/* ここに設定ボタン挿入（画像あり） */}
                <div className="WaitingBox">
                    {Array.from({ length: 6 }).map((_, i) => (
                        <div className="WaitingPlayer">
                            <p>プレイヤー名</p>
                        </div>
                    ))}
                    {/* ここのlengthを参加人数に、プレイヤー名変更 */}
                </div>
                <GrowButton label="スタート"
                    onClick={() => {
                        navigate("/Prepare");
                    }
                    } className="WaitingButton" type="button" />
            </div>
    )
}

export default Waiting;    