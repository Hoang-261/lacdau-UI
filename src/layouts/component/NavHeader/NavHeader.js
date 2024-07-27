import classNames from 'classnames/bind';
import styles from './NavHeader.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faBagShopping, faXmark } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/svg-arrow.css';
import { Link } from 'react-router-dom';
import SupportItem from '~/component/SupportItem';
import AccountOption from '~/component/AccountOption';
import Wrapper from '~/component/Wrapper';
import Button from '~/component/Button';
import { useContext } from 'react';
import { dataApi } from '~/App';
import ProductSearch from '~/component/ProductSearch';
import Login from '~/component/Login';
import Register from '~/component/Register';
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

function NavHeader({ className }) {
    const dataContext = useContext(dataApi);
    const modal = useContext(state);
    const classes = cx('wrapper', {
        [className]: className,
    });
    return (
        <div className={classes}>
            {navbarItems.map((item) => (
                <Link key={item.id} to={item.to} className={cx('menu-item', 'd-none', 'd-lg-block')}>
                    <p>{item.content}</p>
                </Link>
            ))}
            <div className={cx('d-none', 'd-lg-block')}>
                <Tippy
                    placement="bottom"
                    interactive
                    delay={(500, 0)}
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
            {modal.isUser ? (
                <div className={cx('d-none', 'd-lg-block')}>
                    <Tippy
                        interactive
                        delay={(500, 0)}
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
                <>
                    <div className={cx('menu-item')}>
                        <Login />
                    </div>
                    <div className={cx('menu-item')}>
                        <Register />
                    </div>
                </>
            )}
            <div className={cx('icon')}>
                <Tippy
                    interactive
                    placement="bottom-end"
                    delay={(500, 0)}
                    render={(attr) => (
                        <div className="support-list" tabIndex="1" {...attr}>
                            <Wrapper>
                                {dataContext.cart.length > 0 ? (
                                    <div className={cx('cart')}>
                                        {dataContext.cart.map((item) => (
                                            <ProductSearch
                                                cart={dataContext.cart}
                                                setCart={dataContext.setCart}
                                                data={item}
                                                icon={<FontAwesomeIcon icon={faXmark} />}
                                            />
                                        ))}
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
                        {dataContext.cart.length > 0 && <div className={cx('dot')}>{dataContext.cart.length}</div>}
                        <FontAwesomeIcon icon={faBagShopping} />
                    </div>
                </Tippy>
            </div>
        </div>
    );
}
NavHeader.propTypes = {
    className: PropTypes.string,
};
export default NavHeader;
