import css from './SearchBar.module.css'
import toast, { Toaster } from 'react-hot-toast';

const notify = () => toast('Make a search request.');

export default function SearchBar({ onSubmit }) {
    const handleSubmit = (event) => {
        event.preventDefault();
        const query = event.target.elements.search.value.trim();
        if (query === '') {
            notify();
            console.log('error');
        }
        else {
            event.target.reset();
            onSubmit(query);
        }
    }
    return (
        <header className={css.header}>
            <form onSubmit={handleSubmit} className={css.form}>
                <input
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
                    name="search"
                    className={css.input}
                />
                <button type="submit" >Search</button>
            </form>
             <Toaster position="top-right" toastOptions={{
                            // Define default options
                            className: '',
                            duration: 3000,
                            style: {
                            background: '#f9f9f9',
                            color: 'rgb(97, 39, 39)',
                            },
                            }}/>
        </header>

  )
}
