import Footer from "../footer"
import Seat from "../seat";
import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {
    SubTitle, ContainerRow, Infos, Selected, Available, Unavailable, Circles,
    TextInfos, GIF, InputBlock, FinalizeButton
} from "./style"


export default function Seats() {
    const { idSection } = useParams();
    const [data, setData] = useState(false);
    const [seatNumber, setSeatNumber] = useState([]); //para a tela final
    const [seatId, setSeatId] = useState([]) //para o post


    useEffect(() => {
        const request = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSection}/seats`);
        request.then(answer => {
            const { data } = answer;
            setData(data)
            console.log(data.seats)
        })
        request.catch(<p>Carregando...</p>);
    }, []);

    function chooseSeat(id, name, isAvailable) {

        console.log(seatNumber)
        if (!isAvailable) {
            alert('O assento não está disponível! Tente outro.')
        }
        else {
            setSeatId([...seatId, id]);
            setSeatNumber([...seatNumber, name])
        }
    }


    if (data === false) {
        return (<p>Carregando...</p>)
    } else {
        return (
            <>
                <SubTitle>Selecione o(s) assento(s)</SubTitle>
                <ContainerRow>
                    {data === false ? <p>Carregando...</p> :
                        data.seats.map((seat, index) => {
                            const { id, name, isAvailable } = seat
                            return (<Seat
                                key={index}
                                isAvailable={isAvailable}
                                name={name}
                                onClick={() => chooseSeat(id, name, isAvailable)}
                            />
                            )
                        })}
                </ContainerRow>
                <Infos>
                    <Circles>
                        <Selected></Selected>
                        <Available></Available>
                        <Unavailable></Unavailable>
                    </Circles>
                    <TextInfos>
                        <p>Selecionado</p>
                        <p>Disponível</p>
                        <p>Indisponível</p>
                    </TextInfos>
                </Infos>

                <div>
                    <form /* onSubmit={userLogin} */>
                        <InputBlock>
                            <label >Nome do comprador:</label>
                            <input 
                            type="text" 
                            placeholder="Digite seu nome" 
                            equired
                            /* onChange={e => setUserName(e.target.value)} */
                            /* value={userName} */ />
                        </InputBlock>

                        <InputBlock>
                            <label >CPF do comprador:</label>
                            <input 
                            type="text" 
                            placeholder="Digite seu cpf" 
                            required
                            /* onChange={e => setCPF(e.target.value)} */
                            /* value={CPF} *//>
                            
                        </InputBlock>
                        <FinalizeButton type="submit">Reservar assento(s)</FinalizeButton>
                    </form>
                </div>
                <Footer title={data.movie.title} date={data.day.date} hour={data.name} posterURL={data.movie.posterURL} />
            </>
        )
    }
}