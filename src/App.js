import './App.scss';
import { Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Headers from './components/Header';
import ListUsers from './components/ListUsers';
import { sassFalse } from 'sass';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <div className='app-container'>
        <Headers />
        <Container>
          <ListUsers />
        </Container>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </>
  );
}

export default App;
