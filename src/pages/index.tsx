import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { makeGetRequest } from "../adapters/get"
import { setApiKey } from "../adapters/apiConfig"
import { MyData } from "../interfaces/LoginInterfaces/status"
import { ToastContainer, toast } from 'react-toastify';

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

    const handleApiKeyChange = () => {
        setApiKey(newApiKey);
        setNewApiKey('');

        fetchData();

        if(!data?.response || Object.keys(data.response).length === 0){
            inputKey.current?.classList.add('invalid')
            setAlertKey('Chave inválida. Insira uma chave válida')
        }else{
            if(data?.response.subscription.active){
                goToMainPage()
            }else{
                inputKey.current?.classList.add('invalid')
                setAlertKey('Chave inativa. Verifique sua assinatura ou insira uma chave válida')
            }
        }

    };

    const navigate = useNavigate();
    const goToMainPage = () => {
        navigate('/meutime');
    }

    return (
        <> 
            <div className="login">
                <label htmlFor="key"><h3>{alertKey}</h3></label>
                <input type="password" name="key" id="key" ref={inputKey} onChange={ (e) => setNewApiKey(e.target.value)}/>
                <button onClick={() => handleApiKeyChange()}>Entrar</button>
            </div>        
        </>
    )

}

export default Login;