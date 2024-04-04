import { Link } from 'react-router-dom';
import FavoriteCounter from '../FavoriteCounter';
import Logo from '../Logo';
import './styles.scss';

const Header = () => {
    return (
        <div className='header-container' data-testid='header'>
            <Link to='/' data-testid="to-home-link">
                <Logo />
            </Link>
            <Link to='/favorites' data-testid="to-favorites-link">
                <FavoriteCounter />
            </Link>
        </div>
    )
}

export default Header