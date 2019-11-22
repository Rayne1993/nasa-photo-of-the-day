import React from 'react'; //{ Component, useState, useEffect }
//import axios from 'axios';
import styled from "styled-components";

const Da = styled.p`
    color: white;
    font-weight: bold;
    margin-top: -30px;
`;

const Drop = styled.select`
    width: 100px;
    margin-bottom: 20px;
`;

// const [date, setDate] = useState();
// const [query, setQuery] = useState("react");

const DropDown =  () => { //useEffect(() => {
//     const fetchData = () => {
//         axios.get("https://api.nasa.gov/planetary/apod?api_key=TRrENN2eqDf9uPVpoLIqvxVHKTJgmQiMUff7qGMl")
//             .then(res => setDate(res.date));
//     }
//     fetchData();
// }, [query]);

// const handleChange = e => {
//     setQuery(e.target.value)
// }
        return (
            <>
            <Da>Select a Date</Da>
            <Drop></Drop>  
            </>
        )
            //value={query} onChange={handleChange}
    
}

export default DropDown;
