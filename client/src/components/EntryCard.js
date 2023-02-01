// import {useEffect} from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import Modal from "react-bootstrap/Modal"
import Form from "react-bootstrap/Form"
import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'



const EntryCard = ({dream, updated, setUpdated}) => {

    ///DELETE
    const deleteDream = async () => {
        await axios
        .delete(`${dream._id}`)
        .then((res) => setUpdated(!updated))
        .catch((err) => console.log(err));
    }

    //UPDATE
    const [updatedDream, setUpdatedDream] = useState({
        entry: "",
        hoursOfSleep: ""
    })

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const updateDream = () => {
        setUpdatedDream({
            entry: dream.entry,
            hoursOfSleep: dream.hoursOfSleep
        });
        handleShow();
    };

  

    const handleChange = (event) => {
        setUpdatedDream({
            ...updatedDream,
            [event.target.name]: event.target.value
        });
    }

    const saveUpdatedDream = (event) => {
        event.preventDefault();
        
        axios
        .put(`http://localhost:8000/${dream._id}`, updatedDream)
        .then((res) => setUpdated(!updated))
        .catch((err) => console.log(err))

        handleClose();
        
    }



    return(
        <div>
        <Card style={{display: "flex", justifyContent: "space-around", border: "1pt solid grey", background: "lightblue", width: "300px", height: "auto"}}>
            <Card.Body>
                <Card.Text style={{background: "white", height: "auto", maxHeight: "100%", border: "1pt solid lightgrey", borderRadius: "5pt"}}>
                {dream.entry}
                </Card.Text>
                {dream.hoursOfSleep}
                <div style={{display: "flex", justifyContent: "space-around"}}>
                    <Button onClick={updateDream} variant='light' style={{border: "1pt solid grey", width: "45%"}}>Edit</Button>
                    <Button onClick={deleteDream} variant='light' style={{border: "1pt solid grey", width: "45%"}}>Delete</Button>
                </div>
            </Card.Body>
        </Card>

        {/* ////// */}

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Update Dream
                    </Modal.Title>
                </Modal.Header>
                <Form onSubmit={saveUpdatedDream}>
                    <Form.Group>
                        <Form.Label>Edit Entry</Form.Label>
                        <Form.Control name="entry" value={updatedDream.entry || ""} onChange={(event) => setUpdatedDream({...updatedDream, entry: event.target.value})}>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Edit Hours of Sleep</Form.Label>
                        <Form.Control name="hoursOfSleep" as="select" onChange={handleChange}>
                            <option type="number" value={9}>9 hours</option>
                            <option type="number" value={8}>8 hours</option>
                            <option type="number" value={7}>7 hours</option>
                            <option type="number" value={6}>6 hours</option>
                            <option type="number" value={5}>5 hours</option>
                            <option type="number" value={4}>4 hours</option>
                            <option type="number" value={3}>3 hours</option>
                            <option type="number" value={2}>2 hours</option>
                            <option type="number" value={1}>1 hour</option>
                            <option type="number" value={0}>No Sleep</option>
                        </Form.Control>
                    </Form.Group>
                    <Modal.Footer>
                        <Button onClick={handleClose}>Close</Button>
                        <Button type="submit">Save Changes</Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </div>
    )
}

export default EntryCard;