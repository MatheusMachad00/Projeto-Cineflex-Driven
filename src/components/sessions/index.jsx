import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Footer from "../footer";
import { SubTitle, MovieDate, ContainerTime, Button} from "./style"




export default function Sessions({ setFooterState }) {
    const { idMovie } = useParams();
    const [days, setDays] = useState([]);
    const [movie, setMovie] = useState([]);



    useEffect(() => {
        const request = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idMovie}/showtimes`);
        request.then(answer => {
            const { data } = answer;
            setDays(data.days);
            setMovie({ ...answer.data });
        })
    }, [])

    if (days === []) {
        return (<p>carregando...</p>);
    } else {
        return (
            <>
                <SubTitle>Selecione o horário</SubTitle>
                <div>
                    {
                        days.map((day) => {
                            const { id, weekday, date, showtimes } = day;
                            return (<div key={id}>
                                <MovieDate>{weekday} - {date}</MovieDate>
                                <ContainerTime>
                                    {
                                        showtimes.map((showtime, index) => (
                                            <Link key={index} to={`/assentos/${showtime.id}`}>
                                                <Button 
                                                key={index}
                                                onClick={() => setFooterState(movie.title, movie.posterURL, weekday, showtime.name)}
                                                >{showtime.name}</Button>
                                            </Link>
                                        ))
                                    }
                                </ContainerTime>
                            </div>)
                        })
                    }
                </div>
                <Footer title={movie.title} posterURL={movie.posterURL} />
            </>
        );
    }
}