import { SeatButton } from "./style"
import { useState } from "react";

export default function Seat({name, isAvailable}) {
    const [isSelected, setIsSelected] = useState([]);

    function seatColor(isAvailable, selected) {
        seatSelected(selected)
        if(isSelected.includes(selected)) return "#8DD7CF";
        else if(isAvailable) return "#C3CFD9";
        else return "#FBE192"; 
    }

    function seatSelected(selected) {
        if (isSelected.includes(selected)) {
            setIsSelected([...isSelected.filter((s) => s !== selected)]);
            return;
        }

        setIsSelected([...isSelected, selected]);
    }

    return (
        <SeatButton isAvailable={isAvailable} >{name}</SeatButton>
    );
}