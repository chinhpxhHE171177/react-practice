import './App.scss';
import { Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Headers from './components/Header';
import ListUsers from './components/ListUsers';
import { useState } from 'react';
import ModalAddNew from './components/ModalAddNew';
import { sassFalse } from 'sass';

function App() {

  const [isShowModalAddNew, setIsShowModalAddNew] = useState(false);

  const handleClose = () => {
    setIsShowModalAddNew(false);
  }
  return (
    <div className='app-container'>
      <Headers />
      <Container>
        <div className='my-3 add-user d-flex justify-content-between'>
          <h5>List of users: </h5>
          <button className='btn btn-primary' onClick={() => setIsShowModalAddNew(true)}>Add New User</button>
        </div>
        <ListUsers />
      </Container>
      <ModalAddNew
        show={isShowModalAddNew}
        handleClose={handleClose} />
    </div>
  );
}

export default App;
