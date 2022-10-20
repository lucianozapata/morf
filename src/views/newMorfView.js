import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';




export default function morfView(props) {

    // Hanterare av det som skrivs i inputen
    const morfNameRef = React.useRef()
  
    return (
                <>

                  <div id = "morfius"> Morfius</div>
                    <div id="flexDiv">
                        <div className="one" style={{color:"white"}}>
                            <Form.Label>Skriv in namnet på Morfpersonen</Form.Label>
                        </div>
                        <div className="one">
                            <Form.Control
                                ref={morfNameRef}
                            />
                        </div>
                        <div className="one" style={{color:"white"}}>
                            <Form.Text muted>
                                Tänk på att skriva in stora och små bokstäver
                            </Form.Text>
                        </div>
  
                        <div>
                        <Button onClick={startMorf} variant="light">Let's morf</Button>{' '}
                        </div>
                  </div>
                </>
            
          
        
        
    )

    function startMorf(e) {
        props.morfSplittedFunction(morfNameRef);
    }
    

}