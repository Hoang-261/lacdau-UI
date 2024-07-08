import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import Slider from '~/component/Slider/Slider';
const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <Slider />
            {/* <Nav />
            <Product /> */}
        </div>
    );
}

export default Home;
