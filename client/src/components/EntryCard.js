import {useEffect} from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'


const EntryCard = ({dreams}) => {
    return(
        <Card style={{
            display: "flex",
            justifyContent: "space-around",
            border: "1pt solid grey",
            background: "lightblue",
            width: "300px",
            height: "300px"
        }}>
            <Card.Body>
                <Card.Text style={{
                    background: "white",
                    height: "200px",
                    border: "1pt solid lightgrey",
                    borderRadius: "5pt"
                }}>
                    
                </Card.Text>
                <div style={{
                    display: "flex",
                    justifyContent: "space-around"
                }}>
                    <Button variant='light' style={{border: "1pt solid grey", width: "45%"}}>Edit</Button>
                    <Button variant='light' style={{border: "1pt solid grey", width: "45%"}}>Delete</Button>
                </div>
            </Card.Body>
        </Card>
    )
}

export default EntryCard;