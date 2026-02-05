import "./Wating.css"
import { useNavigate } from "react-router-dom";
import GrowButton from "../../Components/GrowButton/GrowButton";

function Wating() {
    const navigate = useNavigate();

    return (
        <form action="/RoomID" method="POST">
            <div className="WaitingBackground">
                {/* ここに設定ボタン挿入（画像あり） */}
                <div className="WaitingBox">
                    {Array.from({ length: 6 }).map((_, i) => (
                        <div className="WaitingPlayer">
                            <p>プレイヤー名</p>
                        </div>
                    ))}
                </div>
                <GrowButton label="スタート"
                    onClick={() => {
                        navigate("/Prepare");
                    }
                    } className="WaitingButton" type="button" />
            </div>
        </form>
    )
}

export default Wating;    