import React from "react";
import MorfView from "../views/newMorfView";
import DragView from "../views/dragView";


export default function StartpagePresenter() {

    const [splittedMorf, setSplittedMorf] = React.useState(null)
    

    return (
        <div id="massiveDiv">
        {splittedMorf !== null ? (
                <DragView finalMorfNames={splittedMorf}/>
            ) : (
                <MorfView morfSplittedFunction={(splittedNames) => setSplittedMorf(splittedNames.current.value.split(""))}/>
            )}
        </div>


            
        
    )




    
}