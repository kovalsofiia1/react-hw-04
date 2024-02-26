import css from './ImageCard.module.css'

export default function ImageCard({url, alt}) {
  return (
    <div className={css.imageContainer}>
          <img src={url} alt={alt } />
    </div>
  )
}
