import React, { useState } from "react"
import { Link } from "react-router-dom"

import './login.css'


const Login = () => {


    const [phone, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const logIn = async (e) => {
        e.preventDefault();

        let result = await fetch('http://localhost:4000/login-user', {
            method: "post",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ phone, password })
        });

        result = await result.json()

        if (result.status === false) {
            alert(result.message)

        }else{
        alert("user login sucessfull")
        }
    }


    return (
        <div className="login">
            <h3>Login</h3>

            <div className="login-input">
                <form>
                    <label className="input">Phone : </label>
                    <input
                        type='text'
                        placeholder="phone number"
                        value={phone}
                        onChange={(e) => setEmail(e.target.value)}
                    /><br />

                    <label className="input">Password: </label>
                    <input
                        type='password'
                        placeholder="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    /><br /><br />

                    <button className="btn" type="submit" onClick={logIn}>Login</button><br/>

                    <span>
                        Don't have an account ? <Link to="/signup">SignUp.</Link>
                    </span>
                </form>
            </div>

        </div>

    )

}

export default Login