import Header from "./Header";
import React, {useState ,useEffect} from "react";
import {Button, Form} from "react-bootstrap";
import {useHistory} from "react-router-dom";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();
    useEffect(()=>{
        if (localStorage.getItem('user-info'))
        {
            history.push('/add')
        }
    },[])
    async function Login()
    {
        let user = {email,password}
        let result = await fetch("http://127.0.0.1:8000/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body:JSON.stringify(user)
        });
        result = await result.json();
        localStorage.setItem('user-info', JSON.stringify(result));
        history.push('/add');
    }
    return (
        <>
            <Header />
            <div className="container">
                <br />
                <h1>Login Form</h1>
                <br />

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" onChange={(e)=>setEmail(e.target.value)} placeholder="Enter email" />
                </Form.Group>
                <br />
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" onChange={(e)=>setPassword(e.target.value)} placeholder="Password" />
                </Form.Group>
                <br />
                <Button variant="primary" onClick={Login} type="submit">
                    Login
                </Button>

            </div>
        </>
    )
}

export default Login