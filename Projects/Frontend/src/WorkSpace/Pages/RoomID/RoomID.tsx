import "./RoomID.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../../Components/InputField/InputField";
import GrowButton from "../../Components/GrowButton/GrowButton";

function RoomID() {
    const navigate = useNavigate();
    const [RoomID, setRoomID] = useState("");
    const [error, setError] = useState("");

    return (
        <form action="/RoomID" method="POST">
            <div className="RoomIDBackground">
                <div className="RoomIDBox">
                    <div className="RoomIDInput">
                        <p>ルームID</p>
                        <InputField name="RoomID" type="text"
                            onChange={(e) => {
                                setRoomID(e.target.value);
                                setError("");
                            }}
                            placeholder="" />
                            {error && <p className="RoomIDError">{error}</p>}
                    </div>
                </div>
                <GrowButton label="決定" 
                onClick={() => {
                        if (RoomID === "") {
                            setError("ルームIDを入力してください");
                        } else {
                            navigate("/Waiting");
                        }
                    }} className="RoomIDButton" type="button" />
            </div>
        </form>
    )
}

export default RoomID;    