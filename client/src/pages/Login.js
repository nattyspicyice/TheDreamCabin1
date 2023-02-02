import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';


const Login = () => {
    
    return (
        <div className='login'>
            <h1>The Dream Cabin</h1>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control size='lg' type="email" placeholder="Enter username" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control size='lg' type="password" placeholder="Enter password" />
                </Form.Group>
                <Link to='/'><Button size='lg' variant="dark" type="submit"> 
                    Login
                </Button>
                </Link>
            </Form>
        </div>
    )
}

export default Login;