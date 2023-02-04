import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import './signup.css'


const SignUp = () => {

    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')


    const SignUp = async (e) => {
        e.preventDefault();
        console.log(name, phone, password);

        let result = await fetch('http://localhost:4000/add-user', {
            method: "post",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, phone, password,})
        });

        result = await result.json()

        if (result.status === false) {
            alert(result.message)

        } else {
            alert('accout created sucsessfully')
            navigate('/login')
        }
    }



    return (

        <div className="signup">
            <h3>
                SignUp
            </h3>

            <div className="signup-input">
                <form>

                    <label>Name: </label>
                    <input
                        type='text'
                        placeholder="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    /><br />

                    <label>phone : </label>
                    <input
                        type='text'
                        placeholder="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    /><br />

                    <label>Password: </label>
                    <input
                        type='password'
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    /><br />


                    {/* <Link to="/login" > */}
                    <button className="btn" type="submit" onClick={SignUp}>SignUp</button><br />
                    {/* </Link> */}

                    <span>
                        Already have an account ? <Link to="/login">Login.</Link>
                    </span>

                </form>
            </div>




        </div>
    )

}

export default SignUp