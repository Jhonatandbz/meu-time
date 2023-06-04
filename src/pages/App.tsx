import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import "../styles/app.css"
import Countries from "../components/AppComponent/countries"
import Leagues from "../components/AppComponent/leagues"
import Teams from "../components/AppComponent/teams"
import Players from "../components/AppComponent/players/players"
import TeamStatics from "../components/AppComponent/statics/statics"

import { getApiKey } from "../adapters/apiConfig"

const MeuTime: React.FC = () =>{

    const navigate = useNavigate();
    const [selectedCountry, setSelectedCountry] = useState("")
    const [selectedLeague, setSelectedLeague] = useState("")
    const [selectedTeam, setSelectedTeam] = useState("")

    const countrySelectedEvent = (country: string) => {
        setSelectedCountry(country)
    }

    const leagueSelectedEvent = (league: string) => {
        setSelectedLeague(league)
    }

    const teamSelectedEvent = (team: string) => {
        setSelectedTeam(team)
    }

    const backToLogin = () => {
        navigate('/');
        
    }

    useEffect(()=>{
        if(getApiKey() == ''){
            backToLogin();
        }
    }, [])

    

    

    return(
        <div className="containerMain">

            <header className="selectionMenu">

                <h2><em>Meu Time</em></h2>

                <div className="selection countrie">
                    <Countries onSelect={countrySelectedEvent}/>
                </div>

                <div className="selection leagues">
                    <Leagues country={selectedCountry} onSelect={leagueSelectedEvent}/>
                </div>

                <div className="selection teams">
                    <Teams league={selectedLeague} onSelect={teamSelectedEvent}/>
                </div>

            </header>

            <div className="infoTeams">

                <TeamStatics league={selectedLeague} team={selectedTeam}/>

                <div className="selection players">
                        
                        <Players league={selectedLeague} team={selectedTeam}/>
                </div>
            </div>

        </div>
    )

}

export default MeuTime;