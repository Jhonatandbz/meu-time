import React from "react";
// import makeGetRequest from "../components/get"

const Login = () => {

    return (
        <> 
            <div className="login">
                <label htmlFor="key">Insira sua key</label>
                <input type="password" name="key" id="key"/>
                <button>Entrar</button>
            </div>        
        </>
    )

}

export default Login;