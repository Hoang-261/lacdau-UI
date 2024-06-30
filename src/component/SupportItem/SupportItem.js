import classNames from 'classnames/bind';
import styles from './SupportItem.module.scss';
const cx = classNames.bind(styles);

function SupportItem() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('item')}>Driver tải về</div>
            <div className={cx('item')}>Hướng dẫn bảo hành </div>
            <div className={cx('item')}>Kiểm tra bảo hành</div>
        </div>
    );
}

export default SupportItem;
