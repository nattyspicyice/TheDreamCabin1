import axios from 'axios';
import moment from "moment";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import Modal from "react-bootstrap/Modal"
import Form from "react-bootstrap/Form"
import { useState } from 'react';


const EntryCard = ({dream, updated, setUpdated}) => {

    ///DELETE
    const deleteDream = async () => {
        await axios
        .delete(`https://the-dream-cabin-backend-2.onrender.com/${dream._id}`)
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
        .put(`https://the-dream-cabin-backend-2.onrender.com/${dream._id}`, updatedDream)
        .then((res) => setUpdated(!updated))
        .catch((err) => console.log(err))

        handleClose();
    }

    return(
        <div>
        <Card className="entryCard">
            <Card.Body>
                <Card.Text className='date'>
                    {moment(dream.createdAt).format('MM/DD/YYYY')}
                </Card.Text>
                <Card.Text className='cardText'>
                {dream.entry}
                </Card.Text>
                <Card.Text className="hoursOfSleepCard" style={{textAlign: "center"}}>
                {dream.hoursOfSleep} Hours of Sleep
                </Card.Text>
                <div style={{display: "flex", justifyContent: "space-around"}}>
                    <Button className="button" onClick={updateDream}  style={{width: "45%"}}>Edit</Button>
                    <Button className="button" onClick={deleteDream}  style={{width: "45%"}}>Delete</Button>
                </div>
            </Card.Body>
        </Card>

        {/* MODAL EDIT FORM */}

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Update Dream
                    </Modal.Title>
                </Modal.Header>
                <Form className ="editform" onSubmit={saveUpdatedDream}>
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
                        <Button variant="dark" onClick={handleClose}>Close</Button>
                        <Button variant="dark" type="submit">Save Changes</Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </div>
    )
}

export default EntryCard;