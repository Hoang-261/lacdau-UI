import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './ProductItem.module.scss';

const cx = classNames.bind(styles);
function ProductItem({ data }) {
    if (data) {
        return (
            <Link to={`/keyboard/${data.path}`} className={cx('wrapper')}>
                {data.old_price !== 0 && (
                    <div className={cx('discount')}>{`${Math.floor(
                        ((data.old_price - data.price) / data.old_price) * 100,
                    )}%`}</div>
                )}
                <img className={cx('product-img')} src={data.url_ava} alt={data.display_name} />
                <div className={cx('info')}>
                    <p className={cx('name')}>{data.display_name}</p>
                    <div className={cx('price')}>
                        {data.old_price > 0 && <p className={cx('old-price')}>₫{data.old_price}</p>}
                        <p className={cx('now-price')}>₫{data.price}</p>
                    </div>
                    <div className={cx('status')}>{data.status}</div>
                </div>
            </Link>
        );
    }
}

export default ProductItem;
