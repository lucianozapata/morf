import React from "react";
import { mockDataPersonal } from "../assets/mockData";
import { Link } from "react-router-dom";

export default function PersonalView() {
    const mockData = mockDataPersonal;

    return (
        <div id="personalVyDiv">
            {mockData.map((personal) => {
                return (
                    <div key={personal.namn}>
                        <Link to={`/morfning/${personal.namn}`}>
                        <div className="namnBorder">{personal.namn}</div>
                        </Link>
                    </div>
                )
            })}
       </div>
    )
}