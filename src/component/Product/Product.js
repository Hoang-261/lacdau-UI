import styles from './Product.module.scss';
import classNames from 'classnames/bind';
import { useContext } from 'react';
import { dataApi } from '~/App';
const cx = classNames.bind(styles);

function Product() {
    const data = useContext(dataApi);
    console.log(data);
    return <div className={cx('wrapper')}></div>;
}

export default Product;
