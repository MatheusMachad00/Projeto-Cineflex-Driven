import Footer from "../footer"
import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {
    SubTitle, ContainerRow, Seat, Infos, Selected, Avaliable, Unavaliable, Circles,
    TextInfos, GIF, InputBlock, FinalizeButton} from "./style"


export default function Seats(){
    const { idSection } = useParams();
    const [data, setData] = useState(false);

    useEffect(() => {
        const request = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSection}/seats`);
        request.then(answer => {
            const { data } = answer;
            setData(data)
            console.log(data.seats)
        })
        request.catch(<p>Carregando...</p>);
    }, []);


    if(data === false){
        return (<p>Carregando...</p>)
    }else {
        return(
            <>
            <SubTitle>Selecione o(s) assento(s)</SubTitle>
                <ContainerRow>
                    {/* {
                        data.seats.map((seat, index) => {
                            const { id, isAvaliable, name } = seat
                            return (<Seat key={index} onClick={() => movieSeats(id, name)}>{name}</Seat>)
                        })
                    } */}
                </ContainerRow>
                <Infos>
                    <Circles>
                        <Selected></Selected>
                        <Avaliable></Avaliable>
                        <Unavaliable></Unavaliable>
                    </Circles>
                    <TextInfos>
                        <p>Disponível</p>
                        <p>Selecionado</p>
                        <p>Indisponível</p>
                    </TextInfos>
                </Infos>

                {/* <div>
                    <form onSubmit={userLogin}>
                        <InputBlock>
                            <label >Nome do comprador:</label>
                            <input 
                            type="text" 
                            placeholder="Digite seu nome" 
                            equired
                            onChange={e => setUserName(e.target.value)}
                            value={userName} />
                        </InputBlock>

                        <InputBlock>
                            <label >CPF do comprador:</label>
                            <input 
                            type="text" 
                            placeholder="Digite seu cpf" 
                            required
                            onChange={e => setCPF(e.target.value)}
                            value={CPF}/>
                            
                        </InputBlock>
                        <FinalizeButton type="submit">Reservar assento(s)</FinalizeButton>
                    </form>
                </div> */}
                <Footer title={data.movie.title} date={data.day.date} hour={data.name} posterURL={data.movie.posterURL}/>
            </>
            )
    }
}