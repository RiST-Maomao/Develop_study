import "./LoginRegister.css"
import InputField from "../../Components/InputField/InputField";
import ConfirmButton from "../../Components/ConfirmButton/ConfirmButton";

function LoginRegister() {
    return (
        <div className="LoginRegisterBackground">
            <h1><span className="Pink">〇〇</span>
                <span className="Blue">人狼</span>
            </h1>
            <div className="LoginRegisterBox">
                <div className="LoginRegisterText">
                    <InputField name="UserID" type="text" placeholder="ユーザー名" />
                    <InputField name="Password" type="password" placeholder="パスワード" />
                </div>
                <ConfirmButton label="スタート" onClick={() => window.location.href = "/LoginRegister"} type="button" />
            </div>
        </div>
    )
}

export default LoginRegister;    