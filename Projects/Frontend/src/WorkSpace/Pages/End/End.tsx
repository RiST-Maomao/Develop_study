import "./End.css"
import { useNavigate } from "react-router-dom";

function End() {
    const navigate = useNavigate();


    return (
        <form action="/EndResult" method="POST">
            <div className="EndBackground">
                <h2>結果発表</h2>
                <div className="EndBox">
                    <h3>勝った人</h3>
                    <div className="EndWinner">
                        {Array.from({ length: 3 }).map((_, i) => (
                            <p>勝った人の名前</p>
                        ))}
                    </div>
                    <h3>役職</h3>
                    <div className="EndList">
                        <div className="EndPost">
                            <p>人狼</p>
                            <div className="EndField">
                                {Array.from({ length: 3 }).map((_, i) => (
                                    <p>名前</p>
                                ))}
                            </div>
                        </div>
                        <div className="EndPost">
                            <p>村人</p>
                            <div className="EndField">
                                {Array.from({ length: 3 }).map((_, i) => (
                                    <p>名前</p>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* ここのlengthを参加人数に、プレイヤー名変更 */}
                </div>
                <button onClick={() => { navigate("/"); }} className="EndButton" type="button">
                    終わる
                </button>
            </div>
        </form>
    )
}

export default End;    