import styled from 'styled-components'

/* const handleColorType = color => {
    switch (color) {
        case "unavailable":
            return "#FBE192";
        case "selected":
            return "#8DD7CF";
        default:
            return "#C3CFD9";
    }
}; */


export const SeatButton = styled.div`
border: 1px solid ${props => props.isAvailable ? '#7B8B99' : '#F7C52B;'};
box-sizing: border-box;
border-radius: 12px;
color: #000000;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 11px;
line-height: 13px;
width: 26px;
height: 26px;
display: flex;
justify-content: center;
text-align: center;
align-items: center;
margin-bottom: 5px;
background-color: ${({isAvailable, isSelected}) => !isAvailable ? '#FBE192' : '#C3CFD9'};
`
