import FavoriteCounter from '../FavoriteCounter';
import Logo from '../Logo';
import './styles.scss';

const Header = () => {
    return (
        <div className='header-container'>
            <Logo />
            <FavoriteCounter />
        </div>
    )
}

export default Header