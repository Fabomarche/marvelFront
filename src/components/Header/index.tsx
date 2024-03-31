import { Link } from 'react-router-dom';
import FavoriteCounter from '../FavoriteCounter';
import Logo from '../Logo';
import './styles.scss';

const Header = () => {
    return (
        <div className='header-container'>
            <Link to='/'>
                <Logo />
            </Link>
            <Link to='/favorites' >
                <FavoriteCounter />
            </Link>
        </div>
    )
}

export default Header