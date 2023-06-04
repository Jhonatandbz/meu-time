import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { makeGetRequest } from "../adapters/get"
import { setApiKey } from "../adapters/apiConfig"
import { MyData } from "../interfaces/LoginInterfaces/status"
import "../styles/login.css"

const Login = () => {

    const inputKey = useRef<HTMLInputElement>(null);
    const [data, setData] = useState<MyData | null>(null);
    const [newApiKey, setNewApiKey] = useState<string>('');
    const [alertKey, setAlertKey] = useState<string>('Insira sua chave');

    const fetchData = async () =>{
        
        const endpoint = `status`
        
        try{
            const response = await makeGetRequest({endpoint: endpoint});
            setData(response);
        }catch(error){
            console.error(error);
        }
    }

    useEffect(() => {
        
        if(!data?.response || Object.keys(data.response).length === 0){
            inputKey.current?.classList.add('invalid')
            setAlertKey('Chave inválida. Insira uma chave válida.')
        }else{
            if(data?.response.subscription.active){
                goToMainPage()
            }else{
                inputKey.current?.classList.add('invalid')
                setAlertKey('Chave inativa. Verifique sua assinatura ou insira uma chave válida.')
            }
        }

        if(!inputKey.current?.value){
            setAlertKey('Insira sua chave')
            inputKey.current?.classList.remove('invalid')
        }
        
      }, [data]);

    const handleApiKeyChange = () => {
        setApiKey(newApiKey);
        setNewApiKey('');

        fetchData();
    };

    const navigate = useNavigate();
    const goToMainPage = () => {
        navigate('/meutime');
    }

    return (
        <div className="containerLogin">
            <h1>Bem vindo ao Meu time</h1>
            <div className="loginContainer">
                
                <div className="login">
                    <label htmlFor="key"><h3>{alertKey}</h3></label>
                    <input type="text" className="key" id="key" ref={inputKey} onChange={ (e) => setNewApiKey(e.target.value)}/>
                    <button onClick={() => handleApiKeyChange()}><em>Entrar</em></button>
                </div>
                <div className="register">
                    <label htmlFor="registerButton"><p>Sem conta? <a href="https://dashboard.api-football.com/register" target="_blank" rel="noopener noreferrer">Registre-se</a></p></label>
                </div>

            </div>
        </div>
    )

}

export default Login;