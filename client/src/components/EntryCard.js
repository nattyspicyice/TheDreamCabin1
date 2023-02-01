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
        entry: '',
        hoursOfSleep: ''
    })

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const updateDream = (dream) => {
        setUpdatedDream(dream);
        handleShow();
    };

    const handleChange = (event) => {
        setUpdatedDream({
            ...updatedDream,
            [event.target.name]: event.target.value
        });
    }

    const saveUpdatedDream = () => {
        axios
        .put(`/${dream._id}`, updatedDream)
        .then((res) => setUpdated(!updated))
        .catch((err) => console.log(err))

        handleClose();
    }

    console.log(updatedDream._id)

    return(
        <div>
        <Card style={{display: "flex", justifyContent: "space-around", border: "1pt solid grey", background: "lightblue", width: "300px", height: "auto"}}>
            <Card.Body>
                <Card.Text style={{background: "white", height: "auto", maxHeight: "100%", border: "1pt solid lightgrey", borderRadius: "5pt"}}>
                {dream.entry}
                </Card.Text>
                {dream.hoursOfSleep}
                <div style={{display: "flex", justifyContent: "space-around"}}>
                    <Button onClick={handleShow} variant='light' style={{border: "1pt solid grey", width: "45%"}}>Edit</Button>
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
                <Form>
                    <Form.Group>
                        <Form.Label>Edit Entry</Form.Label>
                        <Form.Control value={dream.entry ? dream.entry : ''} onChange={handleChange}>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Edit Hours of Sleep</Form.Label>
                        <Form.Control as="select" onChange={handleChange}>
                            <option type="number" value={dream.hoursOfSleep}>9 hours</option>
                            <option type="number" value={dream.hoursOfSleep}>8 hours</option>
                            <option type="number" value={dream.hoursOfSleep}>7 hours</option>
                            <option type="number" value={dream.hoursOfSleep}>6 hours</option>
                            <option type="number" value={dream.hoursOfSleep}>5 hours</option>
                            <option type="number" value={dream.hoursOfSleep}>4 hours</option>
                            <option type="number" value={dream.hoursOfSleep}>3 hours</option>
                            <option type="number" value={dream.hoursOfSleep}>2 hours</option>
                            <option type="number" value={dream.hoursOfSleep}>1 hour</option>
                            <option type="number" value={dream.hoursOfSleep}>No Sleep</option>
                        </Form.Control>
                    </Form.Group>
                    <Modal.Footer>
                        <Button onClick={handleClose}>Close</Button>
                        <Button onClick={saveUpdatedDream} type="submit">Save Changes</Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </div>
    )
}

export default EntryCard;