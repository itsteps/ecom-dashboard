import React,{useState, useEffect} from "react";
import {Form, Button} from 'react-bootstrap';
import {useHistory} from 'react-router-dom';
import Header from "./Header";

function Register() {

    useEffect(()=>{
        if (localStorage.getItem('user-info'))
        {
            history.push('/add')
        }
    },[])

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    async function signUp() {
        let user = {name, email, password}
        // console.warn(user);
        let result = await fetch("http://127.0.0.1:8000/api/register", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body:JSON.stringify(user)
        });
        result = await result.json();
        console.warn("result", result);
        localStorage.setItem("user-info",JSON.stringify(result));
        history.push('/add')
    }

    return (
        <>
            <Header />
            <div className="container">
                <br />
                <h1>Registration Form</h1>
                <br />

                <Form.Group controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter name" />
                </Form.Group>
                <br />
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <br />
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" />
                </Form.Group>
                <br />
                <Button onClick={signUp} variant="primary" type="submit">
                    Signup
                </Button>

            </div>
        </>

    )
}

export default Register