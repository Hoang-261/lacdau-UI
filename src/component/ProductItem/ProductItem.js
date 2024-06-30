import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './ProductItem.module.scss';
import images from '~/assets/image';
const cx = classNames.bind(styles);
function ProductItem({ number, icon }) {
    return (
        <Link to="/" className={cx('wrapper')}>
            <img className={cx('product-img')} src={images.product} alt="Bàn Phím Cơ" />
            <div className={cx('info')}>
                <p className={cx('name')}>BÀN PHÍM CƠ IQUNIX F97 VARIABLE X RGB CHERRY BROWN SWITCH</p>
                <p className={cx('price')}>5.750.000đ</p>
                {/* {number && <p>số lượng: {number}</p>}s */}
            </div>
            {icon && <div className={cx('icon')}>{icon}</div>}
        </Link>
    );
}

export default ProductItem;
