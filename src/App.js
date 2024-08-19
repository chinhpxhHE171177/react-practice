import './App.scss';
import { Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Headers from './components/Header';
import ListUsers from './components/ListUsers';

function App() {
  return (
    <div className='app-container'>
      <Headers />
      <Container>
        <Row>
          <ListUsers />
        </Row>
      </Container>
    </div>
  );
}

export default App;
