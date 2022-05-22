import styled from 'styled-components'

export const SeatButton = styled.div`
border: 1px solid ${props => props.isAvailable ? '#7B8B99' : '#F7C52B;'};
background-color: ${({isAvailable}) => !isAvailable ? '#FBE192' : '#C3CFD9'};
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
background-color: ${props => props.color ? '#8DD7CF' : ''};
`
