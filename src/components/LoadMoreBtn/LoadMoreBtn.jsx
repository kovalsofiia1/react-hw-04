import css from './LoadMoreBtn.module.css'

export default function LoadMoreBtn({onLoad}) {
    return (
    <button className={css.loadMoreBtn}  onClick = {onLoad}>Load more</button>
        )
}
