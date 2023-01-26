import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const dreamForm = () => {
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
            <Form.Control type="text" placeholder="Enter Dream" style={{padding: "0 0 200px 0"}}/>
          </Form.Group>
          <Form.Group style={{display: "flex", justifyContent: "space-between", paddingRight: "30px", paddingLeft: "30px"}}>
          <Form.Label>Hours of Sleep</Form.Label>
            <select>
              <option>9+ hours</option>
              <option>8 hours</option>
              <option>7 hours</option>
              <option>6 hours</option>
              <option>5 hours</option>
              <option>4 hours</option>
              <option>3 hours</option>
              <option>2 hours</option>
              <option>1 hour</option>
              <option>No Sleep</option>
            </select>
          </Form.Group>
          <Form.Group style={{display: "flex", justifyContent: "center", paddingTop: "20px"}}>
            <Button variant="light" type="submit" style={{width: "100%", border: "1pt solid grey"}}>
              Submit
            </Button>
          </Form.Group>
      </Form>
    </div>
    )
}

export default dreamForm;