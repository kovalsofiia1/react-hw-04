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
  const [isOpen, setIsOpen] = useState(false);
  const [activeImg, setActiveImg] = useState(null);
  let total_pages = useRef(1);
  useEffect(() => {
    if (query === '') return;

    async function getImages() {
      try {
        setLoading(true);
        setError(false);

        const responce = await makeRequest(query, page);
        const newImages = responce.data;
        total_pages.current = responce.total_pages;
       setImages((prevImages)=>[...prevImages ,...newImages]);
      } catch (error) {
        setError(true);
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
  }

  const handleLoadMore = async () => {
    setPage(prevPage => prevPage + 1);
  }

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  const modalImg = images.filter((img) => img.id === activeImg);
  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      
       {error ? (
      <ErrorMessage />
    ) : (
      <>
        {images.length > 0 && <ImageGallery images={images} onImageClick={openModal} getImg={setActiveImg} />}
        {loading && <Loader />}
        {images.length > 0 && !loading && total_pages.current>page && <LoadMoreBtn onLoad={handleLoadMore} />}
      </>
          
      )}
      {isOpen && <ImageModal closeModal={closeModal} modalIsOpen={isOpen} info={modalImg[0]} />}
    </>
  )
}


