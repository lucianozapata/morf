import React from "react";
import Form from 'react-bootstrap/Form';


export default function morfView(props) {

    const [morfNamn, setMorfName] = React.useState("");
    const morfNameRef = React.useRef()

    function handleMorfName(e) {

        console.log(morfNameRef.current.value);
    }


    return (
        <>
            <div style={{textAlign: "center", fontSize: "100px"}}> Morfius</div>
                <div id="flexDiv">
                    <div className="one">
                    <Form.Label>Skriv in namnet på Morfpersonen</Form.Label>
                    </div>
                <div className="one">
                    <Form.Control
                        ref={morfNameRef}
                        onChange={handleMorfName}
                    />
                </div>
                <div className="one">
                    <Form.Text muted>
                      Tänk på att skriva in stora och små bokstäver
                    </Form.Text>
                </div>
    
                </div>
        
        </>
    )
}