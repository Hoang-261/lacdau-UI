import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import Search from '~/layouts/component/Search';
import NavHeader from '~/layouts/component/NavHeader';
import images from '~/assets/image';
import NavMobile from '../NavMobile';
import { useState, createContext } from 'react';
const cx = classNames.bind(styles);

export const state = createContext();

function Header() {
    const [showModalLogin, setShowModalLogin] = useState(false);
    const [showModalRegister, setShowModalRegister] = useState(false);

    const [isUser, setIsUser] = useState(false);

    const handleChangeModal = () => {
        setShowModalLogin((prev) => !prev);
        setShowModalRegister((prev) => !prev);
    };
    const stateModal = {
        isUser,
        setIsUser,
        showModalLogin,
        setShowModalLogin,
        setShowModalRegister,
        showModalRegister,
        handleChangeModal,
    };
    return (
        <header className={cx('wrapper')}>
            <state.Provider value={stateModal}>
                <div className={cx('inner', 'container')}>
                    <NavMobile className={cx('d-block', 'd-lg-none', 'col-2', 'col-sm-2')}></NavMobile>
                    <div className={cx('col-3', 'col-sm-2', 'col-md-2')}>
                        <Link to="/">
                            <img className={cx('logo-icon')} src={images.logo} alt="logo" />
                        </Link>
                    </div>

                    <Search className={cx('d-none', 'd-lg-block', 'col-lg-3')} />
                    <NavHeader className={cx('col-lg-6', 'd-flex', 'justify-content-between', 'align-items-center')} />
                </div>
            </state.Provider>
        </header>
    );
}

export default Header;
