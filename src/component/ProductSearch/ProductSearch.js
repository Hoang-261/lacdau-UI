import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './ProductSearch.module.scss';
import PropTypes from 'prop-types';
const cx = classNames.bind(styles);
function ProductSearch({
    data,
    icon,
    cart,
    setCart,
    vertical = false,
    small = false,
    large = false,
    className,
    ...passProps
}) {
    const props = {
        ...passProps,
    };

    const handleRemove = () => {
        setCart((prev) => prev.filter((item) => item.id != data.id));
    };
    return (
        <>
            {data && (
                <div className={cx('wrapper')}>
                    <Link to={`/keyboard/${data.path}`} className={cx('item')} {...props}>
                        <div className={cx('img-box')}>
                            <img className={cx('product-img')} src={data.url_ava} alt={data.display_name} />
                        </div>
                        <div className={cx('info')}>
                            <p className={cx('name')}>{data.display_name}</p>
                            <div className={cx('price')}>
                                {data.old_price > 0 && <p className={cx('old-price')}>₫{data.old_price}</p>}
                                <p className={cx('now-price')}>
                                    {data.quantity && <span>{data.quantity} ˣ </span>}₫{data.price}
                                </p>
                            </div>
                        </div>
                    </Link>

                    {icon && (
                        <div onClick={handleRemove} className={cx('icon')}>
                            {icon}
                        </div>
                    )}
                </div>
            )}
        </>
    );
}
ProductSearch.propTypes = {
    data: PropTypes.object,
    icon: PropTypes.node,
    cart: PropTypes.array,
    setCart: PropTypes.func,
    vertical: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    className: PropTypes.string,
};
export default ProductSearch;
