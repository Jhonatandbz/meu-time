import React from "react";
import Countries from "../components/countries"
import Leagues from "../components/leagues"

const MeuTime: React.FC = () =>{

    return(
        <>
            {/* <div className="countrie">
                <Countries/>
            </div> */}

            <div className="leagues">
                <Leagues/>
            </div>

        </>
    )

}

export default MeuTime;