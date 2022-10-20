import React from "react";
import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd"
import Box from "../components/Box"
import Button from "react-bootstrap"




export default function dragView(props) {

    const [box, setBox] = React.useState(props.finalMorfNames);


    function handleDragEnd(result) {

        if(!result.destination) return;
        const newBox= Array.from(box);
        const [draggedItem] = newBox.splice(result.source.index, 1);
        newBox.splice(result.destination.index,0,draggedItem);
        setBox(newBox);
    }

    // Kollar så att inputen inte är mellanslag
    function validInput(char) {
        return char !== " "
    }

    return (
        <div id="testingdiv">
            <div id="dropDiv">
                <DragDropContext onDragEnd={handleDragEnd}>
                    <Droppable droppableId="boxes" direction="horizontal">
                        {(provided) => (
                            <div className="morfList" ref={provided.innerRef} {...provided.droppableProps}>
                                <div id="newDiv">
                                {box.map((name, index) => 
                                    validInput(name) && (

                                        <Draggable key={index} draggableId={index.toString()} index={index}>
                                            {(provided) => (
                                                <li ref={provided.innerRef} {...provided.dragHandleProps} {...provided.draggableProps}> 
                                                    <Box text={`${name}`}/>
                                                </li>
                                            )}
                                            
                                        </Draggable>
                                    )
                                     
                                )}
                                {provided.placeholder}
                                </div>

                            </div>
                            
                        )}
                        
                    </Droppable>
                </DragDropContext>
            </div>
            <div id="shuffleDiv">
                <button id="buttonDiv">Randomize</button>
            </div>
        </div>
    )
}