import React from "react";
import { mockDataPersonal } from "../assets/mockData";
import Tabell from "../components/Tabell"
import { Link } from "react-router-dom";

export default function PersonalView() {
    const mockData = mockDataPersonal;
    const doquisar = getGren("Doqumenteriet");
    const dadderiet = getGren("Dadderiet");
    const drifveriet = getGren("Drifveriet");
    const ekonomeriet = getGren("Ekonomeriet");
    const quisineriet = getGren("Quisineriet");


    return (
        <div id="personalVyDiv">
            <Tabell lista={doquisar}/>
            <Tabell lista={dadderiet}/>
            <Tabell lista={drifveriet}/>
            <Tabell lista={ekonomeriet}/>
            <Tabell lista={quisineriet}/>
            {/* {mockData.map((personal) => {
                return (
                    <div key={personal.namn}>
                        <Link to={`/morfning/${personal.name}`}>
                        <div className="namnBorder">{personal.name}</div>
                        </Link>
                    </div>
                )
            })} */}


       </div>
    )


    function getGren(grenNamn){
        const results = mockData.filter(obj => obj['branch_name'] === grenNamn);
        console.log(results)
        return results
    }
}