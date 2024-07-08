import classNames from 'classnames/bind';
import styles from './NavHeader.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faBagShopping, faXmark } from '@fortawesome/free-solid-svg-icons';
// import Wrapper from '~/component/Wrapper';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/svg-arrow.css';
import { Link } from 'react-router-dom';
import SupportItem from '~/component/SupportItem';
// import { useState } from 'react';
import AccountOption from '~/component/AccountOption';
import Wrapper from '~/component/Wrapper';
import ProductItem from '~/component/ProductItem';
import Button from '~/component/Button';
const cx = classNames.bind(styles);
const navbarItems = [
    {
        id: 1,
        to: '/keyboard',
        content: 'keyboard',
        img: 'https://akko.vn/wp-content/uploads/2024/04/MOD007V3-he-of-dragon-510x510.png',
    },
    {
        id: 2,
        to: '/kit',
        content: 'Kit bàn phím',
        img: '',
    },
    {
        id: 3,
        to: '/mouse',
        content: 'Mouse',
        img: '',
    },
];
function NavHeader() {
    const currentUser = true;
    let numberProduct = 2;
    return (
        <div className={cx('wrapper')}>
            {navbarItems.map((item) => (
                <Link to={item.to} className={cx('menu-item')}>
                    <p>{item.content}</p>
                </Link>
            ))}
            <div>
                <Tippy
                    placement="bottom"
                    interactive
                    render={(attr) => (
                        <div className="support-list" tabIndex="1" {...attr}>
                            <SupportItem></SupportItem>
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
                <div className={cx('menu-item')}>
                    <p>đăng nhập</p>
                </div>
            )}

            <div>
                <Tippy
                    interactive
                    placement="bottom-end"
                    render={(attr) => (
                        <div className="support-list" tabIndex="1" {...attr}>
                            <Wrapper>
                                {numberProduct > 0 ? (
                                    <div className={cx('cart')}>
                                        <ProductItem icon={<FontAwesomeIcon icon={faXmark} />} />
                                        <ProductItem icon={<FontAwesomeIcon icon={faXmark} />} />
                                        <ProductItem icon={<FontAwesomeIcon icon={faXmark} />} />
                                        <Button outline>Xem giỏ hàng</Button>
                                        <Button primary>Thanh Toán</Button>
                                    </div>
                                ) : (
                                    <div className={cx('noProduct')}>
                                        <p>Chưa có sản phẩm trong giỏ hàng</p>
                                    </div>
                                )}
                            </Wrapper>
                        </div>
                    )}
                >
                    <div className={cx('cart-icon')}>
                        {numberProduct > 0 && <div className={cx('dot')}>{numberProduct}</div>}
                        <FontAwesomeIcon className={cx('icon')} icon={faBagShopping} />
                    </div>
                </Tippy>
            </div>
        </div>
    );
}

export default NavHeader;