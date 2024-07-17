import styles from './Product.module.scss';
import classNames from 'classnames/bind';
import { useContext, useState, useEffect } from 'react';
import { dataApi } from '~/App';
import ProductItem from '~/component/ProductItem';
const cx = classNames.bind(styles);

function Product({ data }) {
    const dataContext = useContext(dataApi);
    const dataSource = dataContext.data;

    if (data) {
        return (
            <div className={cx('wrapper')}>
                {data.map((item) => (
                    <ProductItem data={item} key={item.id} />
                ))}
            </div>
        );
    } else if (dataSource) {
        return (
            <div className={cx('container-md', 'wrapper')}>
                {dataSource.keyboard.map((item) => (
                    <ProductItem data={item} key={item.id} />
                ))}
            </div>
        );
    }
}

export default Product;
