import "./Chatting.css"

function Chatting() {
    return (
        <div className="ChattingBackground">
            <h2>話し合い中…</h2>
            <div className="ChattingBox">
                <p>司会による発言（Arrayの中かも？）</p>
                {Array.from({ length: 6 }).map((_, i) => (
                    <div className="ChattingField">
                        <p>プレイヤー名</p>
                        <div className="ChattingPlayer">
                            <p>発言内容</p>
                        </div>
                    </div>
                ))}
                {/* ここのlengthを参加人数に、プレイヤー名や発言変更 */}
            </div>
        </div>
    )
}

export default Chatting;    