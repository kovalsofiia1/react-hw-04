import {React, useState, useEffect, useRef } from 'react'

import ReactDOM from 'react-dom';
import Modal from 'react-modal';

import css from './App.module.css'

import SearchBar from '../SearchBar/SearchBar'
import ImageGallery from '../ImageGallery/ImageGallery'

import { makeRequest } from '../../requests/imageRequest'
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn'
import Loader from '../Loader/Loader'
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import ImageModal from '../ImageModal/ImageModal';


Modal.setAppElement('#root');


export default function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  
  const [modalIsOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (query === '') return;

    async function getImages() {
      try {
        setLoading(true);
        setError(false);

        const newImages = await makeRequest(query, page);
        
        console.log(newImages);
       setImages((prevImages)=>[...prevImages ,...newImages]);
      } catch (error) {
        setError(true);
        console.log(error);
      }
      finally {
        setLoading(false);
      }

    }
    
    getImages();
  }, [query, page])

  
  const handleSubmit = async (query) => {
    setImages([]);
    setQuery(query);
    setPage(1);
    console.log(images);
  }

  const handleLoadMore = async () => {
    setPage(prevPage => prevPage + 1);
    console.log(page);
    console.log(images);
  }

  function openModal(e) {
    console.log(e);
    setIsOpen(true);
    console.log(modalIsOpen);
  }

  function closeModal() {
    setIsOpen(false);
  }
  console.log(modalIsOpen);
  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      
       {error ? (
      <ErrorMessage />
    ) : (
      <>
        {images.length > 0 && <ImageGallery images={images} onImageClick={ openModal} />}
        {loading && <Loader />}
        {images.length > 0 && !loading && <LoadMoreBtn onLoad={handleLoadMore} />}
          </>
          
      )}
      {modalIsOpen && <ImageModal closeModal={closeModal} />}
    </>
  )
}


