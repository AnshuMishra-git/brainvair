import React from 'react'
import Navigation from './Navigation'
import axios from "axios";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

export default function Fibonacci() {
    let form_data = {};
    const [numbers, setnumbers] = useState("");
    const { register, handleSubmit, errors } = useForm();

    const authAxios = axios.create({
        baseURL: "http://localhost:8001",
    });

    const onSubmit = (data) => {
        form_data = {
            num: numbers,
        };
        console.log(form_data);

        authAxios.post("/fabo", form_data).then((res) => {
            setnumbers(res.data.data.num);
            // if (res.data.success === false) {
            //     alert(res.data.errorMessage);
            // } else if (res.data.success === true) {
            //     window.location.reload(false);
            // }
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
                />
                <button className="btn btn-primary">Get Data</button>
            </form>
        </div>
    )

}
