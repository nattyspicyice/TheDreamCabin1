import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { useState } from "react";

const DreamForm = () => {
  const [dreamData, setDreamData] = useState({
    entry: '', hoursOfSleep: [0]
  });

  const handleSubmit = (event) => {
    //prevents the submit button from refreshing the page
    event.preventDefault();
    console.log(dreamData)

    //clears the input fields after submitting
    setDreamData({entry:'', hoursOfSleep:[0]});
  }


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

        <Form onSubmit={handleSubmit}>
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
            <select onChange={(event) => setDreamData({ ...dreamData, hoursOfSleep: event.target.value })}>

              {/* these options aren't been read as numbers, but it logs the user input anyway */}

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
            </select>
          </Form.Group>
          <Form.Group style={{display: "flex", justifyContent: "center", paddingTop: "20px"}}>
            <Button onClick={handleSubmit} variant="light" type="submit" style={{width: "100%", border: "1pt solid grey"}}>
              Submit
            </Button>
          </Form.Group>
      </Form>
    </div>
    )
}

export default DreamForm;