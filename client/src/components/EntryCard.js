// import {useEffect} from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'


const EntryCard = ({dream}) => {

    const deleteDream = async (id) => {
        await axios
        .delete(`http://localhost:8000/${id}`)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }

    return(
        <Card style={{display: "flex", justifyContent: "space-around", border: "1pt solid grey", background: "lightblue", width: "300px", height: "auto"}}>
            <Card.Body>
                <Card.Text style={{background: "white", height: "auto", maxHeight: "100%", border: "1pt solid lightgrey", borderRadius: "5pt"}}>
                {dream.entry}
                </Card.Text>
                {dream.hoursOfSleep}
                <div style={{display: "flex", justifyContent: "space-around"}}>
                    <Button variant='light' style={{border: "1pt solid grey", width: "45%"}}>Edit</Button>
                    <Button onClick={deleteDream} variant='light' style={{border: "1pt solid grey", width: "45%"}}>Delete</Button>
                </div>
            </Card.Body>
        </Card>
    )
}

export default EntryCard;