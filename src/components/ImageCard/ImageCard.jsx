import css from './ImageCard.module.css'

export default function ImageCard({url, alt, data}) {
  return (
    <div className={css.imageContainer}>
      <img src={url} alt={alt} data-id={data} />
    </div>
  )
}
