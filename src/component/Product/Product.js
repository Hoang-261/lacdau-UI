import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Product.module.scss';
import classNames from 'classnames/bind';
import { useContext, useState } from 'react';
import { dataApi } from '~/App';
import ProductItem from '~/component/ProductItem';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button';
import PropTypes from 'prop-types';
const cx = classNames.bind(styles);

function Product({ data }) {
    const dataContext = useContext(dataApi);
    const dataSource = dataContext.data;
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;
    const handlePageChange = (pageNumber) => {
        setCurrentPage(+pageNumber);
    };
    const handlePageNext = (maxPage) => {
        if (currentPage !== maxPage) {
            setCurrentPage((prev) => prev + 1);
        }
    };
    const handlePagePrev = () => {
        console.log(currentPage);
        if (currentPage !== 1) {
            setCurrentPage((prev) => prev - 1);
        }
    };
    if (data) {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const slicedData = data.slice(startIndex, endIndex);

        const maxPage = Math.ceil(data.length / itemsPerPage);
        const numberPage = [];
        for (let i = 1; i <= maxPage; i++) {
            numberPage.push(i);
        }
        return (
            <>
                <div className={cx('wrapper')}>
                    {slicedData.map((item) => (
                        <ProductItem data={item} key={item.id} />
                    ))}
                </div>
                <div className={cx('pagination')}>
                    {currentPage !== 1 && maxPage > 1 && (
                        <Button onClick={handlePagePrev} rounded>
                            <FontAwesomeIcon icon={faAngleLeft} />
                        </Button>
                    )}
                    {numberPage.map((number) => (
                        <Button
                            onClick={(e) => handlePageChange(e.target.innerText)}
                            rounded
                            primary={currentPage === number}
                            className={cx('numPage')}
                            key={number}
                        >
                            {number}
                        </Button>
                    ))}

                    {currentPage !== maxPage && maxPage > 1 && (
                        <Button onClick={() => handlePageNext(maxPage)} rounded>
                            <FontAwesomeIcon icon={faAngleRight} />
                        </Button>
                    )}
                </div>
            </>
        );
    } else if (dataSource) {
        return (
            <div className={cx('container-md', 'wrapper')}>
                {dataSource.keyboard.map((item) => (
                    <ProductItem data={item} key={item.id} />
                ))}
            </div>
        );
    }
}
Product.propTypes = {
    data: PropTypes.array,
};
export default Product;
