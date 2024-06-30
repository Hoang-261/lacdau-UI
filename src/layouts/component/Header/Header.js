import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import Search from '~/layouts/component/Search';
import Navigation from '~/layouts/component/Navigation';
import images from '~/assets/image';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to="/">
                    <img className={cx('logo-icon')} src={images.logo} alt="logo" />
                </Link>
                <Search />
                <Navigation />
            </div>
        </header>
    );
}

export default Header;
