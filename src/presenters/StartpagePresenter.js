import React from "react";
import MorfView from "../views/newMorfView";
import DragView from "../views/dragView";
import NavBar from "../components/NavBar";
import { Navbar } from "react-bootstrap";

export default function StartpagePresenter() {

    const [splittedMorf, setSplittedMorf] = React.useState(null)
    

    return (
        <>
        <NavBar/>
        
       {splittedMorf !== null ? (
            <DragView finalMorfNames={splittedMorf}/>
        ) : (
            <MorfView morfSplittedFunction={(splittedNames) => setSplittedMorf(splittedNames.current.value.split(""))}/>
        )}
        </>


            
        
    )




    
}