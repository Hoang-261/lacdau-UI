import classNames from 'classnames/bind';
import styles from '../Pages.module.scss';
import Slider from '~/component/Slider/Slider';
import Product from '~/component/Product';
const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('container-fluid', 'p-0', 'wrapper')}>
            <Slider />
            <p className={cx('text')}>sản phẩm mới</p>
            <Product />
        </div>
    );
}

export default Home;
