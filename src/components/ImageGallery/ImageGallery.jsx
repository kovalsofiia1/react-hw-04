import css from './ImageGallery.module.css'
import ImageCard from '../ImageCard/ImageCard'

export default function ImageGallery({ images, onImageClick, getImg }) {
  const handleImgClick = (e) => {
    onImageClick();
    getImg(e.target.dataset.id);
  }
  return (
   <ul className={css.gallery}>
      {images.map((img) => {
            return(
                     <li key={img.id} onClick = {handleImgClick}>
                        <ImageCard url={img.urls.small} alt={img.alt_description} data={img.id} />
                     </li>)
          })}
</ul>

  )
}
