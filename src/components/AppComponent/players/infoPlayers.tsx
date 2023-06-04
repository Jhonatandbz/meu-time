import React, {useEffect, useState} from "react";
import { PlayerInfoProps, PlayerItem } from "../../../interfaces/AppInterfaces/players";
import "../../../styles/infoPlayers.css"

import database from "../../../json/players.json"

const InfoPlayer: React.FC<PlayerInfoProps> = ({data, id}) =>{

    const [imageUrl, setImageUrl] = useState('');
    const [selectedPlayer, setSelectedPlayer] = useState<PlayerItem>()
    

    useEffect(() => {

        const selectedPlayer = data?.response.find((item) => item.player.id === id);
        setSelectedPlayer(selectedPlayer)
        const imageUrl = selectedPlayer?.player.photo || '';

        setImageUrl(imageUrl);
    }, [id]);

    if(!selectedPlayer){
        return <span className="cardPlayer"></span>
    }

    const {name, age, nationality, birth} = selectedPlayer.player

    const date = new Date(birth.date);
    const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;


    return (
        <div className="cardPlayer">

            {imageUrl && <img src={imageUrl} alt="Imagem do jogador" className="playerImage"/>}

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