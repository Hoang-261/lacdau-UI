import classNames from 'classnames/bind';
import styles from './NavMobile.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp, faBars } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/svg-arrow.css';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import Wrapper from '~/component/Wrapper';
import Search from '../Search';
import PropTypes from 'prop-types';
import { state } from '../Header/Header';
const cx = classNames.bind(styles);
const navbarItems = [
    {
        id: 1,
        to: '/keyboard',
        content: 'keyboard',
    },
    {
        id: 2,
        to: '/keycap',
        content: 'KeyCap',
    },
    {
        id: 3,
        to: '/mouse',
        content: 'Mouse',
    },
];
function NavMobile({ className, icon }) {
    const classes = cx('wrapper', {
        [className]: className,
    });
    const [isShowSuport, setIsShowSuport] = useState(false);
    const [isShowOptionAccount, setIsShowOptionAccount] = useState(false);
    const modal = useContext(state);
    const handleShowSuport = () => {
        setIsShowSuport((prev) => !prev);
    };
    const handleShowAccount = () => {
        setIsShowOptionAccount((prev) => !prev);
    };
    return (
        <div className={classes}>
            <Tippy
                interactive
                placement="bottom"
                trigger="click"
                render={(attr) => (
                    <div className="support-list" tabIndex="1" {...attr}>
                        <Wrapper>
                            <Search />
                            {navbarItems.map((item) => (
                                <Link key={item.id} to={item.to} className={cx('menu-item')}>
                                    <p>{item.content}</p>
                                </Link>
                            ))}
                            <div className={cx('menu-item')} onClick={handleShowSuport}>
                                <p>Hỗ trợ</p>
                                {!isShowSuport ? (
                                    <FontAwesomeIcon icon={faAngleDown} />
                                ) : (
                                    <FontAwesomeIcon icon={faAngleUp} />
                                )}
                            </div>
                            {isShowSuport && (
                                <div>
                                    <div className={cx('menu-item')}>
                                        <p>Driver tải về</p>
                                    </div>
                                    <div className={cx('menu-item')}>
                                        <p>Hướng dẫn bảo hành</p>{' '}
                                    </div>
                                    <div className={cx('menu-item')}>
                                        <p>Kiểm tra bảo hành</p>
                                    </div>
                                </div>
                            )}
                            {modal.isUser && (
                                <div>
                                    <div className={cx('menu-item')} onClick={handleShowAccount}>
                                        <p>Tài khoản</p>
                                        {!isShowOptionAccount ? (
                                            <FontAwesomeIcon icon={faAngleDown} />
                                        ) : (
                                            <FontAwesomeIcon icon={faAngleUp} />
                                        )}
                                    </div>
                                    {isShowOptionAccount && (
                                        <div>
                                            <Link to="/" className={cx('menu-item')}>
                                                <p>Trang tài khoản</p>
                                            </Link>
                                            <Link to="/" className={cx('menu-item')}>
                                                <p>Đơn hàng</p>
                                            </Link>
                                            <Link to="/" className={cx('menu-item')}>
                                                <p>Tải xuống</p>
                                            </Link>
                                            <Link to="/" className={cx('menu-item')}>
                                                <p>Địa chỉ</p>
                                            </Link>
                                            <Link to="/" className={cx('menu-item')}>
                                                <p>tài Khoản</p>
                                            </Link>
                                            <Link
                                                to="/"
                                                onClick={() => modal.setIsUser(false)}
                                                className={cx('menu-item')}
                                            >
                                                <p>Thoát</p>
                                            </Link>
                                        </div>
                                    )}
                                </div>
                            )}
                        </Wrapper>
                    </div>
                )}
            >
                <div className={cx('icon')}>
                    <FontAwesomeIcon icon={faBars} />
                </div>
            </Tippy>
        </div>
    );
}
NavMobile.propTypes = {
    className: PropTypes.string,
    icon: PropTypes.node,
};
export default NavMobile;
