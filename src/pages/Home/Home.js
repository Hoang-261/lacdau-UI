import classNames from 'classnames/bind';
import styles from '../Pages.module.scss';
import Slider from '~/component/Slider/Slider';
import Product from '~/component/Product';
const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <Slider />
            <p className={cx('text')}>sản phẩm mới</p>
            <Product />
            {/* <Nav /> */}
        </div>
    );
}

export default Home;
