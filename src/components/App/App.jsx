import { useState , useEffect} from 'react'
import css from './App.module.css'

import SearchBar from '../SearchBar/SearchBar'
import ImageGallery from '../ImageGallery/ImageGallery'

import { makeRequest } from '../../requests/imageRequest'


export default function App() {
  const [images, setImages] = useState([]);

  async function getImages(query) {
    try {
      const newImages = await makeRequest(query);
      console.log(newImages);
      return newImages;
    } catch (error) {
      console.log(error);
    }

  }
  const handleSubmit = async (query) => {
    // setImages([]);
    const newImages = await getImages(query);
    setImages([...newImages]);
    console.log(images);
  }

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      {images.length > 0 && <ImageGallery images={images}/> }
    </>
  )
}


