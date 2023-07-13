import React, { useState } from 'react'

const Signup = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault()
        const obj={
            email,
            password,
            confirm_password:confirmPassword
        }

        // console.log(obj);

        const url=`https://witty-eel-slippers.cyclic.app/users/register`

        fetch(url,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(obj)
        }).then((res)=>res.json())
        .then((data)=>{
            console.log(data);
        })
        .catch((err)=>{
            console.log(err);
        })

        setEmail("")
        setConfirmPassword("")
        setPassword("")
    }

    return (
        <div>
            <h2>Sign up form</h2>

            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} /> <br />   <br />

                <input
                    type="password"
                    placeholder="Password"
                    value={password} onChange={(e) => setPassword(e.target.value)} /><br /><br />

                <input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} /><br /><br />

                <input type="submit" />

            </form>
        </div>
    )
}

export default Signup
