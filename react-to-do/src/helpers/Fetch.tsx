/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react'
import axios from "axios";
import { useState } from "react";

const Fetch = () => {

    const baseUrl = process.env.REACT_APP_API_URL || '';

    const [resp, setresp] = useState<any>('');

    const data = () => {
        axios.get(baseUrl).then((response) => {
            setresp(response)
        })
        .catch(err => {
            console.log(err);
            
        })
    }

    useEffect(() => {
        data()
    }, []);
    

    return {
        resp
    }
}

export default Fetch