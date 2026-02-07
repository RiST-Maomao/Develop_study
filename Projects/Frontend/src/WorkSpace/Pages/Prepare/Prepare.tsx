import "./Prepare.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import GrowButton from "../../Components/GrowButton/GrowButton";

function Prepare() {
    const navigate = useNavigate();
    const [RoomID, setRoomID] = useState("");
    const [error, setError] = useState("");

    return (
        <form action="/Chatting" method="POST">
            <div className="PrepareBackground">
                <div className="PrepareText">
                    <span className="Blue">あなたの役職は</span>
                    <span className="Pink">〇〇</span>
                </div>
                {/* ここの役職変更 */}
                <div className="PrepareBox">
                    <div className="PrepareInput">
                        <p>AIへの指示</p>
                        <textarea name="Direction" 
                            onChange={(e) => {
                                setRoomID(e.target.value);
                                setError("");
                            }}
                            placeholder="あなたの指示を元にAIが話し合いをします" className="PrepareTextarea"></textarea>
                        {error && <p className="PrepareError">{error}</p>}
                    </div>
                </div>
                <GrowButton label="送信"
                    onClick={() => {
                        if (RoomID === "") {
                            setError("AIへの指示を入力してください");
                        } else {
                            navigate("/Chatting");
                        }
                    }} className="PrepareButton" type="button" />
            </div>
        </form>
    )
}

export default Prepare;    