import "./Home.css"
import HomeButton from "../../Components/HomeButton/HomeButton";

function Home() {
    return (
        <div className="HomeBackground">
            <h1><span className="Pink">〇〇</span>
                <span className="Blue">人狼</span>
            </h1>
            <div className="HomeMenue">
                <HomeButton label="ルール" onClick={() => window.location.href = "/LoginRegister"} type="button" />
                <HomeButton label="AI" onClick={() => window.location.href = "/LoginRegister"} type="button" />
            </div>
            <div className="HomeGame">
                <div className ="HomeSeeking">
                    <HomeButton label="ルーム募集" onClick={() => window.location.href = "/LoginRegister"} type="button" />
                </div>
                <div className="HomeJoin">
                    <HomeButton label="ルーム参加" onClick={() => window.location.href = "/LoginRegister"} type="button" />
                </div>
            </div>
        </div>
    )
}

export default Home;    