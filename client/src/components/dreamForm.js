import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios"

import { useState } from "react";

const DreamForm = () => {
  const [dreamData, setDreamData] = useState({
    entry: '', hoursOfSleep: [0]
  });

  const createDream = (event) => {
    event.preventDefault();

    axios
    .post('/', dreamData)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
  };

  //need clear function after the form has been submitted

  return(
      <div style={{
        width: "25%",
        textAlign: "left",
        padding: "20px",
        border: "1pt solid grey",
        background: "lightblue",
        color: "black",
        margin: "20px",
        borderRadius: "12pt"}}>

        <Form>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Keep Dreamin'...</Form.Label>
            <Form.Control
            onChange={(event) => setDreamData({ ...dreamData, entry: event.target.value })} 
            value={dreamData.entry} 
            type="text"
            placeholder="Enter Dream"
            style={{padding: "0 0 200px 0"}}/>
          </Form.Group>
          <Form.Group style={{display: "flex", justifyContent: "space-between", paddingRight: "30px", paddingLeft: "30px"}}>
          <Form.Label>Hours of Sleep</Form.Label>
            <Form.Control as="select" onChange={(event) => setDreamData({ ...dreamData, hoursOfSleep: event.target.value })}>
              <option value={dreamData.hoursOfSleep[9]}>9+ hours</option>
              <option value={dreamData.hoursOfSleep[8]}>8 hours</option>
              <option value={dreamData.hoursOfSleep[7]}>7 hours</option>
              <option value={dreamData.hoursOfSleep[6]}>6 hours</option>
              <option value={dreamData.hoursOfSleep[5]}>5 hours</option>
              <option value={dreamData.hoursOfSleep[4]}>4 hours</option>
              <option value={dreamData.hoursOfSleep[3]}>3 hours</option>
              <option value={dreamData.hoursOfSleep[2]}>2 hours</option>
              <option value={dreamData.hoursOfSleep[1]}>1 hour</option>
              <option value={dreamData.hoursOfSleep[0]}>No Sleep</option>
            </Form.Control>
          </Form.Group>
          <Form.Group style={{display: "flex", justifyContent: "center", paddingTop: "20px"}}>
            <Button onClick={createDream} variant="light" type="submit" style={{width: "100%", border: "1pt solid grey"}}>
              Submit
            </Button>
          </Form.Group>
      </Form>
    </div>
    )
}

export default DreamForm;

