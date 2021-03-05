import React from 'react'
import Navigation from './Navigation'
import axios from "axios";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import "./Landing.css"


export default function Fibonacci() {
    let response = '';
    let form_data = {};
    const [resp, setResp] = useState([]);
    const [fabo, setFabo] = useState([]);
    const { register, handleSubmit, errors } = useForm();


    const authAxios = axios.create({
        baseURL: "http://localhost:8001",
    });

    const onSubmit = (data) => {
        form_data = {
            num: fabo,
        };

        authAxios.post("/fabo", form_data).then((res) => {
            setResp(res.data.result);
            if (res.data.success === false) {
                alert(res.data.errorMessage);
            } else if (res.data.success === true) {
                // window.location.reload(true);
            }
        });
    }

    return (
        <div>
            <Navigation />
            <h1 className="bg-info">Fabonics Series</h1>
            <form
                noValidate
                onSubmit={handleSubmit(onSubmit)}
            >
                <input
                    variant="outlined"
                    margin="normal"
                    required
                    id="fab"
                    className="Logininput"
                    label="Fabonics Series"
                    name="fab"
                    placeholder="Enter Number"
                    value={fabo}
                    autoFocus
                    onChange={(event) => {
                        setFabo(event.target.value);
                    }}
                    ref={register({
                        required: "Required",
                    })}
                /><br></br>
                <button className="btn btn-primary">Submit Number</button>
            </form>
            {resp == '' ? (<h1>Please Enter Number and Submit </h1>) : (
                <div>
                    <h3>User Input: {fabo}</h3>
                    {resp.map((ele, ind) =>
                        <li>{ele}</li>)}
                </div>
            )}
        </div>
    )
}
