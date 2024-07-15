import classNames from 'classnames/bind';
import styles from './InfoProductItem.module.scss';
import Swiper from 'swiper';
import { useContext, useState } from 'react';
import { dataApi } from '~/App';
import Button from '../Button';

const cx = classNames.bind(styles);

function InfoProductItem() {
    const dataContext = useContext(dataApi);
    const cart = dataContext.cart;
    const setCart = dataContext.setCart;
    const dataSource = dataContext.data;
    const [quantity, setQuantity] = useState(1);
    let data = {};

    const handleIncrease = () => {
        setQuantity((prev) => prev + 1);
    };
    const handleReduce = () => {
        if (quantity > 1) {
            setQuantity((prev) => prev - 1);
        }
    };
    const handleAddCart = () => {
        data.quantity = quantity;

        const existingItem = cart.find((item) => item.id === data.id);

        if (existingItem) {
            const updatedCart = cart.map((item) => {
                if (item.id === data.id) {
                    return {
                        ...item,
                        quantity: item.quantity + data.quantity,
                    };
                }
                return item;
            });

            setCart(updatedCart);
        } else {
            setCart((prev) => [...prev, data]);
        }
    };
    if (dataSource) {
        dataSource.keyboard.map((item) => {
            if (`/keyboard/${item.path}` == window.location.pathname) data = item;
        });
        return (
            <div className={cx('wrapper')}>
                <div className={cx('item')}>
                    <div className={cx('img-box')}>
                        <img className={cx('product-img')} src={data.url_ava} alt={data.display_name} />
                    </div>
                    <div className={cx('product-info')}>
                        <div className={cx('info')}>
                            <p className={cx('name')}>{data.display_name}</p>
                            <div className={cx('price')}>
                                {data.old_price > 0 && <p className={cx('old-price')}>₫{data.old_price}</p>}
                                <p className={cx('now-price')}>₫{data.price}</p>
                                {data.old_price !== 0 && (
                                    <div className={cx('discount')}>{`${Math.floor(
                                        ((data.old_price - data.price) / data.old_price) * 100,
                                    )}%`}</div>
                                )}
                            </div>
                            <div className={cx('add-cart')}>
                                <Button outline small onClick={handleReduce}>
                                    -
                                </Button>
                                <Button small disabled>
                                    {quantity}
                                </Button>
                                <Button outline small onClick={handleIncrease}>
                                    +
                                </Button>
                                <Button primary onClick={handleAddCart}>
                                    Thêm vào giỏ hàng
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('describe')}>
                    <h2>Thông tin sản phẩm</h2>
                    <p>Update...</p>
                </div>
            </div>
        );
    }
}

export default InfoProductItem;
