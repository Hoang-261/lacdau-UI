import classNames from 'classnames/bind';
import styles from '../Pages.module.scss';
import ProductCategory from '~/layouts/ProductCategory';
const cx = classNames.bind(styles);

function Keyboard() {
    return (
        <div className={cx('wrapper')}>
            <ProductCategory />
        </div>
    );
}

export default Keyboard;
