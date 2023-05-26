import React, {useState} from "react";
import "../styles/app.css"
import Countries from "../components/countries"
import Leagues from "../components/leagues"
import Teams from "../components/teams"
import Players from "../components/players"

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

    const teamSelectedEvent = (league: string) => {
        setSelectedTeam(league)
    }

    return(
        <>
            <div className="selectionMenu">
                <div className="countrie">
                    <Countries onSelect={countrySelectedEvent}/>
                </div>

                <div className="leagues">
                    <Leagues country={selectedCountry} onSelect={leagueSelectedEvent}/>
                </div>

                <div className="teams">
                    <Teams league={selectedLeague} onSelect={teamSelectedEvent}/>
                </div>

            </div>

            <div className="players">
                <Players league={selectedLeague} team={selectedTeam}/>
            </div>
        </>
    )

}

export default MeuTime;