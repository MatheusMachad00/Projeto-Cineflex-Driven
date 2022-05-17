import styled from 'styled-components'

export default function Header(){
    return(<Head>CINEFLEX</Head>);
}

const Head = styled.header`
background-color: #C3CFD9;
color: #E8833A;
width: 100%;
height: 67px;
display: flex;
justify-content: center;
text-align: center;
align-items: center;
font-size: 34px;
margin: 0;
font-family: 'Roboto';
`;