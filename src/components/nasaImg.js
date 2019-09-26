import React, { useState, useEffect } from "react";
import axios from "axios";


export function NasaImg() {
    const [nasa, setNasa] = useState([]);
    const [ex, setEx] = useState("");
    const [title, setTitle] = useState("");

    useEffect(() => {
        axios
        .get("https://api.nasa.gov/planetary/apod?api_key=TRrENN2eqDf9uPVpoLIqvxVHKTJgmQiMUff7qGMl")
        .then(res => {
            console.log(res.data);
            setNasa(res.data.url)
            setEx(res.data.explanation)
            setTitle(res.data.title)
        })
        .catch(err => {
            console.log("Error", err);
        })
    }, []);
    return (
        <div style = {{margin: "50px auto", width: "50%", border: "1px solid black", padding: "20px", 
        backgroundColor: "teal", borderRadius: "10px"}}>
            <img src = {nasa} style = {{width: "80%", margin: "10px auto", marginTop: "25px", borderRadius: "10px"}}/>
            <h2>{title}</h2>
            <p style = {{fontSize: "1.2rem"}}>{ex}</p>
        </div>
    )
}