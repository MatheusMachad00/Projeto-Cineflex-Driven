import Footer from "../footer"
import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";



export default function Seats(){
    const { idSection } = useParams();
    const [data, setData] = useState([]);

    useEffect(() => {
        const request = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSection}/seats`);
        request.then(answer => {
            /* const { data } = answer; */
            setData(answer.data)
            console.log(data)
            console.log(data.movie.title)


        })
        request.catch(<p>Carregando...</p>);
    }, []);


    if(data === []){
        return (<p>Carregando...</p>)
    }else {
        return(
            <>
            <p>Tela seats</p>
                <Footer title={data.movie.title} date={"18/05"} hour={'data.name'} posterURL={'data.movie.posterURL'}/>
            </>
            
            )
    }
}