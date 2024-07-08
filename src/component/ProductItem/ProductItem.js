import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './ProductItem.module.scss';

const cx = classNames.bind(styles);
function ProductItem({ data, icon, small = false, large = false, className }) {
    return (
        <>
            {data && (
                <Link to={`/!${data.path}`} className={cx('wrapper')}>
                    <img className={cx('product-img')} src={data.url_ava} alt={data.display_name} />
                    <div className={cx('info')}>
                        <p className={cx('name')}>{data.display_name}</p>
                        <p className={cx('price')}>{data.price}đ</p>
                    </div>
                    {icon && <div className={cx('icon')}>{icon}</div>}
                </Link>
            )}
        </>
    );
}

export default ProductItem;
