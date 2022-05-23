import { Link, useLocation } from "react-router-dom";
import { SubTitle, InfoBox, FinalizeButton } from "./style"


export default function FinalScreen() {
    const { state } = useLocation();
    const { name, cpf, weekday, hour, title, number } = state;
    console.log(state)

    return (
        <>
            <SubTitle>Pedido feito com sucesso!</SubTitle>

            <InfoBox>
                <h2>Filme e sessão</h2>
                <h3>{title}</h3>
                <h3> {weekday} às {hour} </h3>
            </InfoBox>

            <InfoBox>
                <h2>Ingressos</h2>
                {number.map((n, index) => (<h3 key={index}>Assento {n}</h3>))}
            </InfoBox>

            <InfoBox>
                <h2>Comprador</h2>
                <h3>Nome: {name}</h3>
                <h3>CPF: {cpf}</h3>
            </InfoBox>

            <Link to="/">
                <FinalizeButton>Voltar pra Home</FinalizeButton>
            </Link>
        </>
    )
}