import React from "react";
import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd"
import Box from "../components/Box"
import {useParams} from "react-router-dom"



export default function MorfView() {

    const { id } = useParams();

    const [splittedList, setSplittedList] = React.useState(id.split(""));

    function handleDragEnd(result) {

        if(!result.destination) return;
        const newSplittedList= Array.from(splittedList);
        const [draggedItem] = newSplittedList.splice(result.source.index, 1);
        newSplittedList.splice(result.destination.index,0,draggedItem);
        setSplittedList(newSplittedList);
    }

    // Kollar så att inputen inte är mellanslag
    function validInput(char) {
        return char !== " "
    }

    // rör om hela namnet så att man får en slumpad morf.
    function shuffleName(e) {
        const shuffledList = splittedList.sort(() => Math.random() - 0.5);
        setSplittedList([...shuffledList]);

        
    }

    return (
        <div id="testingdiv">
            <div id="dropDiv">
                <DragDropContext onDragEnd={handleDragEnd}>
                    <Droppable droppableId="boxes" direction="horizontal">
                        {(provided) => (
                            <div className="morfList" ref={provided.innerRef} {...provided.droppableProps}>
                                <div id="newDiv">
                                {splittedList.map((name, index) => 
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
                <button onClick={shuffleName} id="buttonDiv">Randomize</button>
            </div>
        </div>
    )
}