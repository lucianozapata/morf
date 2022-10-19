import React from "react";
import "../css/box.css"
import Badge from 'react-bootstrap/Badge';



const Box = (props) => {
  
    


    return(
    <h1>
        <div id="BoxCss">
            {props.text}
        </div>
    </h1>
    )
}



export default Box;