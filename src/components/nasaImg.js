import React, { useState, useEffect } from "react";
import axios from "axios";


export function NasaImg() {
    const [nasa, setNasa] = useState([]);
    const [ex, setEx] = useState("");

    useEffect(() => {
        axios
        .get("https://api.nasa.gov/planetary/apod?api_key=TRrENN2eqDf9uPVpoLIqvxVHKTJgmQiMUff7qGMl")
        .then(res => {
            console.log(res.data);
            setNasa (res.data.url)
            setEx(res.data.explanation)
        })
        .catch(err => {
            console.log("Error", err);
        })
    }, []);
    return (
        <div style = {{margin: "0 auto", width: "50%"}}>
            <img src = {nasa} style = {{width: "80%", margin: "0 auto"}}/>
            <p style = {{color: "blue"}}>{ex}</p>
        </div>
    )
}