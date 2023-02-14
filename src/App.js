import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col } from 'react-bootstrap';
import ContactForm from './component/ContactForm';
import ContactList from './component/ContactList';

function App() {
  return (
    <div>
      <Container>
        <h1 className='title'>Phone Book</h1>
        <Row>
          <Col className='border-column'><ContactForm /></Col>
          <Col><ContactList /></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
