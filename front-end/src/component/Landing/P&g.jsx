import React from 'react'
import Navigation from './Navigation'
import "./Landing.css"
import axios from "axios";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

export default function Pg() {

    let form_data = {};
    const [numbers, setnumbers] = useState("");
    const [numbers1, setnumbers1] = useState("");
    const [numbers2, setnumbers2] = useState("");
    const [resp, setResp] = useState([]);
    const { register, handleSubmit, errors } = useForm();


    const authAxios = axios.create({
        baseURL: "http://localhost:8001",
    });


    const onSubmit = (data) => {
        console.log("Button Calling", data)
        form_data = {
            num: [numbers],
            num1: [numbers1],
            num2: [numbers2]
        };
        console.log(form_data);
        authAxios.post("/pg", form_data).then((res) => {
            console.log("res", res.data.result)
            setResp(res.data.result)
            if (res.data.success === false) {
                alert(res.data.errorMessage);
            } else if (res.data.success === true) {
                console.log("Returning True");
            }
        });
    }

    return (
        <div>
            <Navigation />
            <h1 className="bg-primary">Permutation Combination</h1>
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
                    placeholder="Enter Comma Seprated Value"
                    value={numbers}
                    autoFocus
                    onChange={(event) => {
                        setnumbers(event.target.value);
                    }}
                    ref={register({
                        required: "Required",
                    })}
                /><br></br>
                <input
                    variant="outlined"
                    margin="normal"
                    required
                    id="fab"
                    className="Logininput"
                    label="Fabonics Series"
                    name="fab"
                    placeholder="Enter Comma Seprated Value"
                    value={numbers1}
                    autoFocus
                    onChange={(event) => {
                        setnumbers1(event.target.value);
                    }}
                    ref={register({
                        required: "Required",
                    })}
                /><br></br>
                <input
                    variant="outlined"
                    margin="normal"
                    required
                    id="fab"
                    className="Logininput"
                    label="Fabonics Series"
                    name="fab"
                    placeholder="Enter Comma Seprated Value"
                    value={numbers2}
                    autoFocus
                    onChange={(event) => {
                        setnumbers2(event.target.value);
                    }}
                    ref={register({
                        required: "Required",
                    })}
                /><br></br>
                <button className="btn btn-primary">Get Data</button>
            </form>
            {resp == '' ? (<h1>Please Enter Data </h1>) : (
                <div>
                    {resp.map((ele, ind) =>
                        <li>{ele}</li>
                    )}
                </div>
            )}
        </div>
    )
}
