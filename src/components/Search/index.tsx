import { useState } from 'react';
import searchIcon from '../../assets/search.svg';
import './styles.scss';

interface Props {
    setFilter: (filter: string) => void;
    isLoading: boolean
    charactersCount: number;
}

const Search: React.FC<Props> = ({ setFilter, isLoading, charactersCount }) => {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setFilter(inputValue);

    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    return (
        <form className='search-container' onSubmit={handleSubmit}>
            <div className='input-container'>
                <button>
                    <img src={searchIcon} alt='search icon' />
                </button>
                <input
                    type='text'
                    placeholder='SEARCH CHARACTER...'
                    value={inputValue}
                    onChange={handleChange}
                />
            </div>
            <span>{isLoading ? "..." : charactersCount} results</span>
        </form>
    );
};

export default Search;
