import { SeatButton } from "./style"
import { useState } from "react";


export default function Seat({ name, isAvailable, chooseSeat, id, color }) {

    return (
        <SeatButton
            isAvailable={isAvailable}
            color={color.includes(id)}
            onClick={() => chooseSeat(id, name, isAvailable)}>{name}</SeatButton>
    );
}
