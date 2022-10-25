import React from "react";
import { mockDataPersonal } from "../assets/mockData";
import Button from 'react-bootstrap/Button';

export default function PersonalVyPresenter() {
    const mockData = mockDataPersonal;

    return (
    
        mockData.map((personal) => {
            return (
                <div key={personal.namn}>
                    <Button style={{text: "red"}} variant="danger">{personal.namn}</Button>
                </div>
            )
        })
       
    )
}