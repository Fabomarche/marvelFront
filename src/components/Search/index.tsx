import searchIcon from '../../assets/search.svg'
import './styles.scss'

const Search = () => {
    return (
        <div className='search-container'>
            <div className='input-container'>
                <img src={searchIcon} alt=' search icon' />
                <input
                    type='text'
                    placeholder='SEARCH CHARACTER...'
                />
            </div>
            <span>50 results</span>
        </div>
    )
}

export default Search