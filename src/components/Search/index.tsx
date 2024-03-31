import searchIcon from '../../assets/search.svg'
import './styles.scss'

const Search = () => {
    //const store = useFormContext();

    // const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    //     event.preventDefault();
    //     store.addTodo(event.currentTarget.name.value);
    // };
    return (
        <div className='search-container'>
            <div className='input-container'>
                <img src={searchIcon} alt=' search icon' />
                <input
                    type='text'
                    placeholder='SEARCH CHARACTER...'
                // onSubmit={onSubmit}
                />
            </div>
            <span>50 results</span>
        </div>
    )
}

export default Search