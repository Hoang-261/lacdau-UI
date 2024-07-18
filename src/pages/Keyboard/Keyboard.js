import classNames from 'classnames/bind';
import styles from '../Pages.module.scss';
import ProductCategory from '~/layouts/ProductCategory';
import Helmet from '~/component/Helmet';
const cx = classNames.bind(styles);

function Keyboard() {
    return (
        <Helmet title="Danh Mục Keyboard">
            <div className={cx('wrapper')}>
                <ProductCategory />
            </div>
        </Helmet>
    );
}

export default Keyboard;
