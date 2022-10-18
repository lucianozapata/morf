import React from "react";
import MorfView from "../views/newMorfView";
import DragView from "../views/dragView";

export default function StartpagePresenter() {

    const [morfName, setMorfName] = React.useState("");
    const [splittedMorf, setSplittedMorf] = React.useState(null)
    

    return (
        
        splittedMorf !== null ? (
            <DragView finalMorfNames={splittedMorf.split("")}/>
        ) : (
            <MorfView morfNameFunction={(name) => setMorfName(name.current.value)} morfSplittedFunction={(splittedNames) => setSplittedMorf(splittedNames.current.value)}/>
        )


            
        
    )
}