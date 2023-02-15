import React from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'

const SearchBox = () => {
  return (
    <div className='search-box'>
      <Row>
        <Col>
          <Form.Control type="text" placeholder="name" />
        </Col>
        <Col>
          <Button variant="primary" type="submit">
            Search
          </Button>
        </Col>
      </Row>
    </div>
  )
}

export default SearchBox
