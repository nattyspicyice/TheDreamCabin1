import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios"


const DreamForm = ({updated, setUpdated}) => {

  const [dreamData, setDreamData] = useState({
    entry: '', hoursOfSleep: 9
  });


  const createDream = async (event) => {
    event.preventDefault();

    await axios
    .post('https://the-dream-cabin-backend-2.onrender.com', dreamData)
    .then((res) => setUpdated(!updated))
    .catch((err) => console.log(err));
    
    setDreamData({
      entry: '', hoursOfSleep: ''
    })
  };

  return(
      <div className="form">
        <Form onSubmit={createDream}>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label className="form-title">Log Your Dream</Form.Label>
            <Form.Control
            className="entry-field"
            onChange={(event) => setDreamData({ ...dreamData, entry: event.target.value })} 
            value={dreamData.entry} 
            as="textarea"
            placeholder="Enter Dream..."/>
          </Form.Group>
          <Form.Group style={{display: "flex", justifyContent: "space-between", paddingRight: "30px", paddingLeft: "30px"}}>
          <Form.Label className="hoursOfSleep">Hours of Sleep</Form.Label>
            <Form.Control className = 'drop-down' as="select" onChange={(event) => setDreamData({ ...dreamData, hoursOfSleep: event.target.value })}>
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
          <Form.Group style={{display: "flex", justifyContent: "center", paddingTop: "20px"}}>
            <Button  className = 'button' type="submit">
              Submit
            </Button>
          </Form.Group>
      </Form>
    </div>
    )
}

export default DreamForm;
