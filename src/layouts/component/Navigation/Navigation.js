import classNames from 'classnames/bind';
import styles from './Navigation.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faBagShopping, faXmark } from '@fortawesome/free-solid-svg-icons';
// import Wrapper from '~/component/Wrapper';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/svg-arrow.css';
import { Link } from 'react-router-dom';
import SupportItem from '~/component/SupportItem';
import { useState } from 'react';
import AccountOption from '~/component/AccountOption';
import Wrapper from '~/component/Wrapper';
import ProductItem from '~/component/ProductItem';
import Button from '~/component/Button';
const cx = classNames.bind(styles);

function Navigation() {
    const currentUser = true;
    let numberProduct = 2;
    return (
        <div className={cx('wrapper')}>
            <Link to="/keyboard" className={cx('menu-item')}>
                <p>Keyboard</p>
            </Link>
            <Link to="/kit" className={cx('menu-item')}>
                <p>Kit bàn phím</p>
            </Link>
            <Link to="/mouse" className={cx('menu-item')}>
                <p>mouse</p>
            </Link>
            <Link to="/keycap" className={cx('menu-item')}>
                <p>keycap</p>
            </Link>
            <Link to="switch" className={cx('menu-item')}>
                <p>switch</p>
            </Link>
            <Link to="news" className={cx('menu-item')}>
                <p>tin tức</p>
            </Link>
            <Tippy
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
            {currentUser ? (
                <Tippy
                    interactive
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
            ) : (
                <div className={cx('menu-item')}>
                    <p>đăng nhập</p>
                </div>
            )}

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
    );
}

export default Navigation;
