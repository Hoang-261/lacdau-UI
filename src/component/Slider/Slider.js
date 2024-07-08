import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/navigation';
import styles from './Slider.module.scss';
import classNames from 'classnames/bind';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

// import images from '~/assets/image';
const cx = classNames.bind(styles);
const bannerList = [
    {
        id: 1,
        slug: 'ban-phim-akko-pc75b-plus-year-of-tiger',
        url: 'https://res.cloudinary.com/ktshop/image/upload/v1645772075/img/banner/ban-phim-akko-pc75b-plus-year-of-tiger-banner_xez4yi.jpg',
    },
    {
        id: 2,
        slug: 'ban-phim-co-akko-3098n-multi-modes-world-tour-london',
        url: 'https://res.cloudinary.com/ktshop/image/upload/v1645772075/img/banner/ban-phim-co-akko-3098n-multi-modes-world-tour-london-banner_i9qvvd.jpg',
    },
    {
        id: 3,
        slug: 'ban-phim-co-5087b-multi-modes-dracula-castle',
        url: 'https://res.cloudinary.com/ktshop/image/upload/v1645772075/img/banner/akko_gw_03-banner_z9nrrw.jpg',
    },
];
export default function Slider() {
    return (
        <div className={cx('wrapper')}>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <div className={cx('wrapper')}>
                    {bannerList.map((item) => (
                        <SwiperSlide className={cx('slide')} key={item.id}>
                            <Link to={item.to}>
                                <img src={item.url} alt="slide" />
                            </Link>
                        </SwiperSlide>
                    ))}
                </div>
            </Swiper>
        </div>
    );
}
