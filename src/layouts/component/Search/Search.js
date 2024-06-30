import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Wrapper from '~/component/Wrapper';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/svg-arrow.css';
import ProductItem from '~/component/ProductItem';

const cx = classNames.bind(styles);

function Search() {
    return (
        <Tippy
            interactive
            placement="bottom-end"
            render={(attr) => (
                <div className={cx('search-result')} tabIndex="1" {...attr}>
                    <Wrapper>
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                    </Wrapper>
                </div>
            )}
        >
            <div className={cx('search')}>
                <input placeholder="Bạn Cần Tìm gì?" />
                <button className={cx('search-btn')}>
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>
        </Tippy>
    );
}

export default Search;
