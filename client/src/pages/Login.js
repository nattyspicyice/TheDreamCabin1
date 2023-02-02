import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const navigate = useNavigate();
    return (
        <div className='login'>
            <div style={{textAlign: "center"}}>
                <h1>The Dream Cabin</h1>
            </div>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control size='lg' type="email" placeholder="Enter username" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control size='lg' type="password" placeholder="Enter password" />
                </Form.Group>
                <Button onClick ={() => {navigate('/')}} size='lg' variant="dark" type="submit"> 
                    Login
                </Button>
            </Form>
        </div>
    )
}

export default Login;