import React from "react";
import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd"
import { InputGroup } from "react-bootstrap";


export default function dragView(props) {
    
    console.log(props.finalMorfNames)

    const [box, setBox] = React.useState(props.finalMorfNames);


    function handleDragEnd(result) {

        if(!result.destination) return;
        const newBox= Array.from(box);
        const [draggedItem] = newBox.splice(result.source.index, 1);
        newBox.splice(result.destination.index,0,draggedItem);
        setBox(newBox);

    }

    return (
        
        <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="boxes">
                {(provided) => (
                    <ul ref={provided.innerRef} {...provided.droppableProps}>
                        {box.map((name, index) => 
                            <Draggable key={index} draggableId={index.toString()} index={index}>
                                {(provided) => (
                                    <li ref={provided.innerRef} {...provided.dragHandleProps} {...provided.draggableProps}> 
                                        <div className={`box ${"red"}`}>
                                            {name}
                                        </div>
                                    </li>
                                )}
                                    
                            </Draggable>
                        )}
                        {provided.placeholder}
                    </ul>
                )}
                
            </Droppable>
        </DragDropContext>
        
    )
}