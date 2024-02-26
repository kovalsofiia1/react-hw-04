import css from './ImageGallery.module.css'
import ImageCard from '../ImageCard/ImageCard'

export default function ImageGallery({ images }) {
  return (
   <ul className={css.gallery}>
      {images.map((img) => {
            return(
                     <li key={img.id}>
                         <ImageCard url={img.urls.small } alt={ img.alt_description} />
                    </li>)
          })}
</ul>

  )
}
