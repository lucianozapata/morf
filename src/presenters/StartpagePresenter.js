import React from "react";
import MorfView from "../views/newMorfView"

export default function StartpagePresenter() {

    const [morfName, setMorfName] = React.useState("");

    return (
        <>
        <MorfView morfNameFunction={(name) => setMorfName(name)} morfName={morfName}/>
        </>
    )
}