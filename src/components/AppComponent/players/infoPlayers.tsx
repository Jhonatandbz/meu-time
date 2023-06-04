import React, {useEffect, useState} from "react";
import { PlayerInfoProps, PlayerItem } from "../../../interfaces/AppInterfaces/players";
import "../../../styles/infoPlayers.css"

import database from "../../../json/players.json"

const InfoPlayer: React.FC<PlayerInfoProps> = ({data, index}) =>{

    const [imageUrl, setImageUrl] = useState('');
    const [selectedPlayer, setSelectedPlayer] = useState<PlayerItem>()
    
    useEffect(() => {

        console.log(data.response[index])
        const selected = data?.response[index]
        setSelectedPlayer(selected)
        const imageUrl = selected?.player.photo || '';

        setImageUrl(imageUrl);
    }, [index]);

    if(!selectedPlayer){
        console.log("selectedPlayer vazio")
        return (<span className="cardPlayer">
                <h2><em>Selecione um Jogador!</em></h2>
                </span>)
    }

    const {name, age, nationality, birth} = selectedPlayer.player

    const date = new Date(birth.date);
    const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

    console.log("jogador foi selecionado", name)

    return (
        <div className="cardPlayer">

            <img src={imageUrl} alt="Imagem do jogador" className="playerImage"/>

            <div className="cardInfo">
                <h5>Nome: {name}</h5>
                <h5>Idade: {age}</h5>
                <h5>Nascimento: {formattedDate}</h5>
                <h5>Nacionalidade: {nationality}</h5>
            </div>

        </div>

    );
}

export default InfoPlayer;