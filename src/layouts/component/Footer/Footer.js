import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const content = [
    {
        id: 1,
        title: 'HỖ TRỢ KHÁCH HÀNG',
        listItems: ['Hướng dẫn mua hàng trực tuyến', 'Hướng dẫn thanh toán', 'Góp ý, Khiếu Nại'],
    },
    {
        id: 2,
        title: 'CHÍNH SÁCH CHUNG',
        listItems: [
            'Chính sách, quy định chung',
            'Chính sách vận chuyển',
            'Chính sách bảo hành',
            'Chính sách đổi trả và hoàn tiền',
            'Chính sách xử lý khiếu nại',
            'Bảo mật thông tin khách hàng',
        ],
    },
    {
        id: 3,
        title: 'Thông tin khuyến mại',
        listItems: ['Thông tin khuyến mại', 'Sản phẩm khuyến mại', 'Sản phẩm mới'],
    },
];

function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('info-item ')}>
                <Link to="/">
                    <img className={cx('logo-icon')} src={images.logo} alt="logo" />
                </Link>
                <p className={cx('item')}>
                    <FontAwesomeIcon className={cx('icon')} icon={faLocationDot} />
                    <span>Xuân Thủy, P. Dịch Vọng Hậu, Q. Cầu Giấy, Tp. Hà Nội.</span>
                </p>
                <p className={cx('item')}>
                    <FontAwesomeIcon className={cx('icon')} icon={faPhone} />
                    <span>0123456789</span>
                </p>
                <p className={cx('item')}>
                    <FontAwesomeIcon className={cx('icon')} icon={faEnvelope} />
                    <span>huyhoang.tv.hy@gmail.com</span>
                </p>
            </div>
            {content.map((items) => (
                <div key={items.id} className={cx('info-item')}>
                    <p className={cx('title')}>{items.title}</p>
                    {items.listItems.map((item) => (
                        <a key={item} className={cx('item')}>
                            {item}
                        </a>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default Footer;
