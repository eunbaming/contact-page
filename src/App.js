import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col } from 'react-bootstrap';
import ContactForm from './component/ContactForm';

function App() {
  return (
    <div>
      <h1 className='title'>Phone Book</h1>
      <Container>
        <Row>
          <Col><ContactForm /></Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
