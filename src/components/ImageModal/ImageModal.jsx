import css from './ImageModal.module.css'
import Modal from 'react-modal';
import { FaHeart } from "react-icons/fa6";

const customStyles = {
  content: {
    width: '70%',
    height: '70%',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    },
    overlay: {
        backgroundColor: '#434343b5',
    }
};

export default function ImageModal({ closeModal, modalIsOpen, info }) {
  return (
    <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Picture Modal"
    >
      <div className={css.content}>
        <div className={css.imageContainer}>
          <img src={info.urls.regular} alt={info.alt_description} className={css.image}/>
        </div>
        <div className={css.info}>
          <div className={css.author}>
            <div className={css.username}>{info.user.username}</div>
          
          <div className={css.likes}>
            <FaHeart fill="red" />
            <span>{ info.likes}</span>
          </div>
          </div>
          
          <div className={css.desc}>{ info.alt_description}</div>
        </div>
        
      </div>
       
    </Modal>
  )
}
