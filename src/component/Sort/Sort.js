import classNames from 'classnames/bind';
import styles from './Sort.module.scss';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
const cx = classNames.bind(styles);
const sortData = [
    {
        id: 1,
        type: 'Tên A-Z',
    },
    {
        id: 2,
        type: 'Tên Z-A',
    },
    {
        id: 3,
        type: 'Giá thấp đến cao',
    },
    {
        id: 4,
        type: 'Giá cao đến thấp',
    },
];
function Sort({ sortItems }) {
    const [checked, setChecked] = useState();
    useEffect(() => {
        sortItems(checked);
    }, [checked]);
    return (
        <div className={cx('wrapper')}>
            <h3>Xếp theo: </h3>
            {sortData.map((sort) => (
                <div key={sort.id}>
                    <input
                        type="radio"
                        checked={checked === sort.id}
                        onChange={() => setChecked(sort.id)}
                        className={cx('check-box')}
                    />
                    {sort.type}
                </div>
            ))}
        </div>
    );
}
Sort.propTypes = {
    sortItems: PropTypes.func.isRequired,
};
export default Sort;
