import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import Search from '~/layouts/component/Search';
import NavHeader from '~/layouts/component/NavHeader';
import images from '~/assets/image';
import NavMobile from '../NavMobile';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <NavMobile className={cx('d-block', 'd-sm-none', 'col-2')}></NavMobile>
                <div className={cx('col-4', 'col-sm-2', 'col-md-4')}>
                    <Link to="/">
                        <img className={cx('logo-icon')} src={images.logo} alt="logo" />
                    </Link>
                </div>

                <Search className={cx('d-none', 'd-sm-block', 'col-sm-2', 'col-md-3')} />
                <NavHeader
                    className={cx('col-sm-8', 'col-md-5', 'd-flex', 'justify-content-between', 'align-items-center')}
                />
            </div>
        </header>
    );
}

export default Header;
