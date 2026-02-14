import "./Home.css"
import GrowButton from "../../Components/GrowButton/GrowButton";

function Home() {
    return (
        <div className="HomeBackground">
            <h1><span className="Pink">〇〇</span>
                <span className="Blue">人狼</span>
            </h1>
            <div className="HomeBox">
                <div className="HomeMenue">
                    <GrowButton label="ルール" onClick={() => window.location.href = "/Rule"} className="HomeRule"type="button" />
                </div>
                <div className="HomeGame">
                    <GrowButton label="スタート" onClick={() => window.location.href = "/Register"} className="HomeStart"type="button" />
                </div>
            </div>
        </div>
    )
}

export default Home;    