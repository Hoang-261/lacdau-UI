import classNames from 'classnames/bind';
import styles from './AccountOption.module.scss';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { state } from '~/layouts/component/Header/Header';

const cx = classNames.bind(styles);

function AccountOption() {
    const modal = useContext(state);

    return (
        <div className={cx('wrapper')}>
            <Link to="/" className={cx('item')}>
                Trang tài khoản
            </Link>
            <Link to="/" className={cx('item')}>
                Đơn hàng{' '}
            </Link>
            <Link to="/" className={cx('item')}>
                Tải xuống
            </Link>
            <Link to="/" className={cx('item')}>
                Địa chỉ
            </Link>
            <Link to="/" className={cx('item')}>
                tài Khoản
            </Link>
            <Link to="/" onClick={() => modal.setIsUser(false)} className={cx('item')}>
                Thoát
            </Link>
        </div>
    );
}

export default AccountOption;
