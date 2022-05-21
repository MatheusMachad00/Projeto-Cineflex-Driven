import styled from 'styled-components'

export const SubTitle = styled.div`
display: flex;
justify-content: center;
text-align: center;
align-items: center;
font-size: 24px;
width: 100%;
height: 110px;
color: #293845;
font-family: 'Roboto';
margin-top: -15px;
`;

export const ContainerRow = styled.div`
display: flex;
gap: 8px;
justify-content: center;
flex-wrap: wrap;
margin-top: -10px;
margin-left: 20px;
margin-right: 20px;

/* .color{
    background-color: #8DD7CF;
    border: 1px solid #1AAE9E;
} */
`

/* export const Seat = styled.div`
border: 1px solid ${props => props.isAvailable ? '#7B8B99' : '#F7C52B;'};;
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
background-color: ${props => props.isAvailable ? '#C3CFD9' : '#FBE192'};



.available{
    background-color: #C3CFD9;
    border: 1px solid #7B8B99;
}
.unavaliable{
    background-color: #FBE192;
    border: 1px solid #F7C52B;
}
.selected{
    background-color: #8DD7CF;
    border: 1px solid #1AAE9E;
}
` */

export const Infos = styled.div`
display: flex;
flex-direction: column;
margin-top: 10px;
`

export const Circles = styled.div`
display: flex;
justify-content: space-around;
`

export const TextInfos = styled.div`
display: flex;
justify-content: space-around;

p{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 15px;
    color: #4E5A65;
}
`

export const Selected = styled.div`
background-color: #8DD7CF;
border: 1px solid #1AAE9E;
box-sizing: border-box;
border-radius: 12px;
width: 26px;
height: 26px;
`

export const Available = styled.div`
background-color: #C3CFD9;
border: 1px solid #7B8B99;
box-sizing: border-box;
border-radius: 12px;
width: 26px;
height: 26px;
`

export const Unavailable = styled.div`
background-color: #FBE192;
border: 1px solid #F7C52B;
box-sizing: border-box;
border-radius: 12px;
width: 26px;
height: 26px;
`

export const InfoDivs = styled.div`
display: flex;
justify-content: center;
align-items: center;
text-align: center;
`

export const GIF = styled.img`
margin-left: 45px;
`

export const InputBlock = styled.div`
display: flex;
flex-direction: column;
/* align-items: stretch; */
/* background-color: red; */
/* margin-top: -10px;
margin-left: 24px; */
input{
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    box-sizing: border-box;
    border-radius: 3px;
    height: 51px;
}
label{
    display: block;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: #293845;
    margin-top: 7px;
}
`

export const FinalizeButton = styled.button`
display: flex;
justify-content: center;
align-items: center;
text-align: center;
width: 225px;
height: 42px;
background-color: #E8833A;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 21px;
color: #FFFFFF;
margin: 57px auto 0 auto;
border-radius: 3px;
` 