import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'

const ContactForm = () => {
  const [name, setName] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const dispatch = useDispatch()

  const addContact = (event) => {
    event.preventDefault()
    dispatch (
      {type: "ADD_CONTACT", payload: {name, phoneNumber}}
      )
    setName("")
    setPhoneNumber("")
  }
  
  return (
    <div>
      <Form onSubmit={(event) => addContact(event)}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" onChange={(event) => setName(event.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formContact">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="number" placeholder="Phone Number" onChange={(event) => setPhoneNumber(event.target.value)}/>
        </Form.Group>
        <Button variant="primary" type="submit">
          Create
        </Button>
      </Form>
    </div>
  )
}

export default ContactForm
