import "./Result.css"
import { useNavigate } from "react-router-dom";
import GrowButton from "../../Components/GrowButton/GrowButton";

function Result() {
    const navigate = useNavigate();

    return (
        <div className="ResultBackground">
            <h2>投票結果</h2>
            <div className="ResultBox">
                {Array.from({ length: 6 }).map((_, i) => (
                    <div className="ResultDetail">
                        <h3>{i + 1}位</h3>
                        <p>プレイヤー名</p>
                        <p>○票</p>
                    </div>
                ))}
                <div className="ResultKicked">
                    <p>やっつけられた人</p>
                    <h3>〇〇さん</h3>
                </div>
                {/* ここのlengthを参加人数に、プレイヤー名変更 */}
            </div>
            <GrowButton label="確認"
                onClick={() => {
                    navigate("/Prepare");
                }
                } className="ResultButton" type="button" />
        </div>
    )
}

export default Result;    