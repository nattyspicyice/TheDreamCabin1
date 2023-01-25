import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const dreamForm = () => {
    return(
<Form>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Keep Dreamin'...</Form.Label>
        <Form.Control type="text" placeholder="Enter Dream" />
      </Form.Group>
      <Form.Group>
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
      <Button variant="light" type="submit">
        Submit
      </Button>
    </Form>
    )
}

export default dreamForm;