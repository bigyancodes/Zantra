// App.js
import React, { useState } from 'react';
import './App.css';
import Navbar from './components/header';
import SignupModal from './components/signupModal';

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="App">
      <Navbar openModal={openModal} />
      {modalIsOpen && <SignupModal closeModal={closeModal} />}
    </div>
  );
}

export default App;