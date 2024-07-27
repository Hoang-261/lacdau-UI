import classNames from 'classnames/bind';
import styles from './Filter.module.scss';
import { dataApi } from '~/App';
import { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
const cx = classNames.bind(styles);

function Filter({ filterItems, setData }) {
    const dataContext = useContext(dataApi);
    const data = dataContext.data;
    const [checked, setChecked] = useState([]);
    const handleCheck = (type) => {
        setChecked((prev) => {
            const isChecked = checked.includes(type);
            if (isChecked) {
                return checked.filter((item) => item !== type);
            } else {
                return [...prev, type];
            }
        });
    };
    useEffect(() => {
        if (checked.length === 0) {
            filterItems(typeKeycap);
        } else {
            filterItems(checked);
        }
    }, [checked]);

    let typeLayout = [];
    let typeKeycap = [];
    let typeSwitch = [];
    if (data) {
        data.keyboard.map((item) => {
            typeKeycap.push(...item.type_keycap.map((keycap) => keycap));
            typeLayout.push(item.type_layout);
            typeSwitch.push(item.type_switch);
        });
    }
    typeKeycap = typeKeycap.filter((item, index) => typeKeycap.indexOf(item) === index);

    typeLayout = typeLayout.filter((item, index) => typeLayout.indexOf(item) === index);

    typeSwitch = typeSwitch.filter((item, index) => typeSwitch.indexOf(item) === index);

    const filterData = [
        {
            id: 1,
            kind: 'type_layout',
            name: 'Layout',
            'type-list': typeLayout,
        },
        {
            id: 2,
            kind: 'type_keycap',
            name: 'Keycap',
            'type-list': typeKeycap,
        },
        {
            id: 3,
            kind: 'type_switch',
            name: 'Switch',
            'type-list': typeSwitch,
        },
    ];
    return (
        <div className={cx('wrapper')}>
            <h2> Tìm theo</h2>
            {filterData.map((item) => (
                <div key={item.id} className={cx('filter-widget')}>
                    <h3 className={cx('type-filter')}>{`Phân loại ${item.name}`}</h3>
                    {item['type-list'].map((type) => (
                        <div key={type} className={cx('type')}>
                            <input
                                type="checkbox"
                                checked={checked.includes(type)}
                                onChange={() => {
                                    handleCheck(type);
                                }}
                                className={cx('check-box')}
                            />
                            {type}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

Filter.propTypes = {
    filterItems: PropTypes.func,

    setData: PropTypes.func,
};
export default Filter;
