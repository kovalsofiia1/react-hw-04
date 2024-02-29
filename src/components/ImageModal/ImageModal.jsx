import css from './ImageModal.module.css'
import Modal from 'react-modal';
import React from 'react'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    },
    overlay: {
        backgroundColor: 'rebeccapurple',
    }
};

export default function ImageModal({closeModal}) {
  return (
   <Modal
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
    </Modal>
  )
}
