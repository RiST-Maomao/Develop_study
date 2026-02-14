import "./Register.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import InputField from "../../Components/InputField/InputField";
import GrowButton from "../../Components/GrowButton/GrowButton";

function Register() {
    const navigate = useNavigate();
    const [PlayerName, setPlayerName] = useState("");
    const [GeminiAPI, setGeminiAPI] = useState("");
    const [error, setError] = useState("");

    return (
        <form action="/RoomID" method="POST">
            <div className="RegisterBackground">
                <div className="RegisterBox">
                    <div className="RegisterInput">
                        <p>プレイヤー名</p>
                        <InputField name="PlayerName" type="text"
                            onChange={(e) => {
                                setPlayerName(e.target.value);
                                setError("");
                            }}
                            placeholder="" />
                            {error && <p className="RegisterError">{error}</p>}
                    </div>
                    <div className="RegisterInput">
                        <p>Gemini API</p>
                        <InputField name="GeminiAPI" type="password"
                            onChange={(e) => {
                                setGeminiAPI(e.target.value);
                                setError("");
                            }}
                            placeholder="" />
                            {error && <p className="RegisterError">{error}</p>}
                    </div>
                </div>
                <GrowButton label="決定" 
                onClick={() => {
                        if (PlayerName === "" || GeminiAPI === "") {
                            setError("未入力の項目があります");
                        } else {
                            toast.success("登録しました"); 
                            navigate("/RoomID");
                        }
                    }} className="RegisterButton" type="button" />
            </div>
        </form>
    )
}

export default Register;    