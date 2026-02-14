import "./Vote.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import GrowButton from "../../Components/GrowButton/GrowButton";

function Voting() {
    const [vote, setVote] = useState<number | null>(null);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    return (
        <form action="/VoteResult" method="POST">
            <div className="VoteBackground">
                <h2>投票</h2>
                <div className="VoteBox">
                    {error && <p className="VoteError">{error}</p>}
                    {Array.from({ length: 6 }).map((_, i) => (
                        <label className="VoteSelect">
                            <input type="radio" name="vote" value={i} checked={vote === i} onChange={() => setVote(i)}/>
                            <p>プレイヤー名</p>
                        </label>
                    ))}
                    {/* ここのlengthを参加人数に、プレイヤー名変更 */}
                </div>
                <GrowButton label="投票する"
                    onClick={() => {
                        if(vote == null){
                            setError("投票する人を選択してください");
                        } else {
                            toast.success("投票しました");
                            navigate("/Result");
                        }
                    }
                    } className="VoteButton" type="button" />
            </div>
        </form>
    )
}

export default Voting;    