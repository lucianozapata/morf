import React from "react";



const Tabell = (props) => {
    const grenNamn = props.lista[0]["branch_name"];

    return(
    <h1 className="col-5">
        {grenNamn}
    </h1>
    )
}



export default Tabell;