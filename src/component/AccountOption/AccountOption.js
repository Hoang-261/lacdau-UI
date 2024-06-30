import classNames from 'classnames/bind';
import styles from './AccountOption.module.scss';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

function AccountOption() {
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
            <Link to="/" className={cx('item')}>
                Thoát
            </Link>
        </div>
    );
}

export default AccountOption;
