import React from 'react'
import Navigation from './Navigation'
import axios from "axios";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

export default function Pg() {

    let form_data = {};
    const [numbers, setnumbers] = useState("");
    const [numbers1, setnumbers1] = useState("");
    const [numbers2, setnumbers2] = useState("");
    const { register, handleSubmit, errors } = useForm();


    const authAxios = axios.create({
        baseURL: "http://localhost:8001",
    });

    const onSubmit = (data) => {
        console.log("Button Calling", data)
        form_data = {
            num: numbers,
            num1: numbers1,
            num2: numbers1
        };
        console.log(form_data);

        authAxios.post("/user/me/update", form_data).then((res) => {
            console.log("res", res)
            console.log(res.data);
            if (res.data.success === false) {
                alert(res.data.errorMessage);
            } else if (res.data.success === true) {
                window.location.reload(false);
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
                    fullWidth
                    id="fab"
                    className="Logininput"
                    label="Fabonics Series"
                    name="fab"
                    placeholder="Enter Number"
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
                    fullWidth
                    id="fab"
                    className="Logininput"
                    label="Fabonics Series"
                    name="fab"
                    placeholder="Enter Number"
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
                    fullWidth
                    id="fab"
                    className="Logininput"
                    label="Fabonics Series"
                    name="fab"
                    placeholder="Enter Number"
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
        </div>
    )
}