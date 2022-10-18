import React from "react";
import MorfView from "../views/newMorfView";
import DragView from "../views/dragView";

export default function StartpagePresenter() {

    const [morfName, setMorfName] = React.useState("");
    const [splittedMorf, setSplittedMorf] = React.useState(null)

    return (
        
        splittedMorf !== null ? (
            <DragView/>
        ) : (
            <MorfView morfNameFunction={(name) => setMorfName(name)} morfSplittedFunction={(splittedNames) => setSplittedMorf(splittedNames)}/>
        )


            
        
    )
}