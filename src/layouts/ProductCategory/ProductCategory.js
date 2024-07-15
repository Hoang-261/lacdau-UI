import Product from '~/component/Product';
import styles from './ProductCategory.module.scss';
import classNames from 'classnames/bind';
import Filter from '~/component/Filter';
import Sort from '~/component/Sort';

import { useContext, useState, useEffect, createContext, useRef } from 'react';
import { dataApi } from '~/App';
export const productRender = createContext();

const cx = classNames.bind(styles);
function ProductCategory() {
    const dataContext = useContext(dataApi);
    const dataSource = dataContext.data;
    const dataInit = useRef([]);
    useEffect(() => {
        if (dataSource) {
            dataInit.current = dataSource.keyboard;
            setData(dataInit.current);
        }
    }, [dataSource]);
    const [data, setData] = useState(dataInit.current);

    const filterItems = (cats) => {
        const newData = dataInit.current.filter((item) => cats.some((key) => item.under_category.includes(key)));
        setData(newData);
    };
    const sortItems = (checked) => {
        let newData;
        if (checked === 3) {
            newData = [...data].sort((a, b) => a.price - b.price);
        } else if (checked === 4) {
            newData = [...data].sort((a, b) => b.price - a.price);
        } else if (checked === 1) {
            newData = [...data].sort((a, b) => a.display_name.localeCompare(b.display_name));
        } else if (checked === 2) {
            newData = [...data].sort((a, b) => b.display_name.localeCompare(a.display_name));
        } else {
            newData = [...data].sort((a, b) => a.id - b.id);
        }
        setData(newData);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('catalog-filter')}>
                <Filter filterItems={filterItems} />
            </div>
            <div className={cx('catalog-content')}>
                <Sort sortItems={sortItems} />
                <Product data={data} />
            </div>
        </div>
    );
}

export default ProductCategory;
