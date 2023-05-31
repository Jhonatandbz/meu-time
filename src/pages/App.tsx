import React, {useState} from "react";
import "../styles/app.css"
import Countries from "../components/AppComponent/countries"
import Leagues from "../components/leagues"
import Teams from "../components/teams"
import Players from "../components/players"
import TeamStatics from "../components/statics"

const MeuTime: React.FC = () =>{

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

    return(
        <div className="containerMain">
            <header className="selectionMenu">

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
                        <h3>Jogadores</h3>
                        <Players league={selectedLeague} team={selectedTeam}/>
                </div>
            </div>


            
        </div>
    )

}

export default MeuTime;