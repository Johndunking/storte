import React, { useState } from 'react'; 
import Logo from './Logo'
import { Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';




function Home() {

  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
    return (
      <>
        <section id="home" className='home' >
        <div class="container-fluid">
        <div className="row">
          <div className="cols">
          <h1 className='fade-in home-context'>
        Handy man
        <br />
        &
        <br />
        General Services
      </h1>
          </div>
        </div>
     
      </div>
      <div class="container-fluid">
        <div className="row">
          <div className="button-container">
        <Button className="mod-button fade-in" onClick={handleShowModal} style={{fontFamily:'Merriweather', textShadow: '-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white',}} >Get a quote today</Button>
      </div>
      </div>
      </div>
      <Modal show={showModal} onHide={handleCloseModal}  >
        <Modal.Header closeButton className="custom-modal">
          <Modal.Title className="custom-modal" style={{fontFamily:'agbalumo', textAlign:'center', textShadow: '-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white',}}>Sacramento HandyDude</Modal.Title>
        </Modal.Header>
        <Modal.Body className="custom-modal" style={{fontFamily:'Merriweather', fontSize:'15px', textShadow: '-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white',}}>
          <p>Call <br /> 1-888-888-8888
            <br />
            For a consult about services.</p>
        </Modal.Body>
        <Modal.Footer className="custom-modal" style={{fontFamily:'agbalumo', textShadow: '-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white'}}> Big or small we do it all!
          <Button variant="secondary" onClick={handleCloseModal} style={{fontFamily:'Merriweather'}} >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <div class="container-fluid">
      <div className="row container-fluid">
          <div className="cols">
      <Logo /> 
      </div>
      </div>
      </div>
      </section>
      </>
    );
  }
 
  export default Home;