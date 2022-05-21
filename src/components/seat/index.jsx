import { SeatButton } from "./style"
import { useState } from "react";


export default function Seat({name, isAvailable, chooseSeat, id, isSelected, color}) {

    /* function seatColor(isAvailable, isSelected) {
        if(isSelected) return setColor("#8DD7CF");
        else if(isAvailable) return setColor("#C3CFD9");
        else return setColor("#FBE192"); 
    } */
    

    return (
        <SeatButton
        isAvailable={isAvailable}
        isSelected={isSelected}
        color={color}
        onClick={() => chooseSeat(id, name, isAvailable)}>{name}</SeatButton>
    );
}
