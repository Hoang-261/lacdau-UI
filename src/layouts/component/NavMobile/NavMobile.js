import classNames from 'classnames/bind';
import styles from './NavMobile.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faBars } from '@fortawesome/free-solid-svg-icons';
// import Wrapper from '~/component/Wrapper';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/svg-arrow.css';
import { Link } from 'react-router-dom';
import SupportItem from '~/component/SupportItem';
// import { useState } from 'react';
import AccountOption from '~/component/AccountOption';
import Wrapper from '~/component/Wrapper';
import Search from '../Search';
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
    const currentUser = true;
    const classes = cx('wrapper', {
        [className]: className,
    });
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
                            <div>
                                <Tippy
                                    placement="bottom"
                                    interactive
                                    render={(attr) => (
                                        <div className="support-list" tabIndex="1" {...attr}>
                                            <SupportItem />
                                        </div>
                                    )}
                                >
                                    <div className={cx('menu-item')}>
                                        <p>Hỗ trợ</p>
                                        <FontAwesomeIcon icon={faAngleDown} />
                                    </div>
                                </Tippy>
                            </div>
                            {currentUser ? (
                                <div>
                                    <Tippy
                                        interactive
                                        placement="bottom"
                                        render={(attr) => (
                                            <div className="account-option" tabIndex="1" {...attr}>
                                                <AccountOption></AccountOption>
                                            </div>
                                        )}
                                    >
                                        <div className={cx('menu-item')}>
                                            <p>Tài khoản</p>
                                        </div>
                                    </Tippy>
                                </div>
                            ) : (
                                <div className={cx('menu-item', 'd-none', 'd-sm-block')}>
                                    <p>đăng nhập</p>
                                </div>
                            )}
                        </Wrapper>
                    </div>
                )}
            >
                <div className={cx('cart-icon')}>
                    <FontAwesomeIcon icon={faBars} />
                </div>
            </Tippy>
        </div>
    );
}

export default NavMobile;
