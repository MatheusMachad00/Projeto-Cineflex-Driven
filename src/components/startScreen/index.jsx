import { useState, useEffect, Fragment } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { SubTitle, Movies, Img } from "./style"



export default function StartScreen() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const request = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");

        request.then((answer) => {
            const { data } = answer;
            setItems(data);
        });
        request.then(<p>Carregando...</p>);
    }, []);

    return (
        <>
            <SubTitle>Selecione o filme</SubTitle>
            <Movies>
                {
                    items.map((item, index) => {
                        const { id, posterURL, title } = item;
                        return (<Fragment key={index}>
                            <Link to={`/sessoes/${id}`}>
                                <Img key={index} src={posterURL} alt={title} />
                            </Link>
                        </Fragment>)
                    })
                }
            </Movies></>
    )
}