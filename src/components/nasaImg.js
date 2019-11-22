import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const NasaImg = styled.img`
  width: 80%;
  margin: 30px auto;
  border-radius: 10px;
`;

const H2 = styled.h2`
    color: lightblue;
`;

const Date = styled.p`
    color: black;
    font-weight: bold;
`;

const Ex = styled.p`
    padding: 0 20px 30px 20px;
    color: white;
`;

export default function NasaPic() {
    const [nasa, setNasa] = useState([]);
    const [ex, setEx] = useState("");
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    
    useEffect(() => {
        axios.get("https://api.nasa.gov/planetary/apod?api_key=TRrENN2eqDf9uPVpoLIqvxVHKTJgmQiMUff7qGMl")
            .then(res => {
                console.log(res.data);
                setNasa(res.data.url);
                setEx(res.data.explanation);
                setTitle(res.data.title);
                setDate(res.data.date);
            })
            .catch(err => {
                console.log(err);
            });   
    }, []);
    return (
        <div>
            <NasaImg src = {nasa} alt = "from NASA"/>
            <H2>{title}</H2>
            <Date>{date}</Date>
            <Ex>{ex}</Ex>
        </div>
    );
}