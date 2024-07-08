/* eslint-disable array-callback-return */
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Wrapper from '~/component/Wrapper';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/svg-arrow.css';
import ProductItem from '~/component/ProductItem';
import { useEffect, useState, useContext } from 'react';
import { useDebounce } from '~/component/hook';
import { dataApi } from '~/App';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [isResult, setIsResult] = useState(true);
    const debounce = useDebounce(searchValue, 500);

    const datas = useContext(dataApi);
    useEffect(() => {
        if (!debounce.trim()) {
            setSearchResult([]);
            return;
        }
        datas.keyboard.map((data) =>
            data.under_category.map((value) => {
                if (debounce.toLowerCase() === value.toLowerCase()) {
                    setSearchResult((prev) => [...prev, data]);
                }
            }),
        );
    }, [debounce]);

    const handleHideResult = () => {
        setIsResult(false);
    };
    return (
        <div>
            <Tippy
                interactive
                visible={isResult && searchResult.length > 0}
                placement="bottom-end"
                render={(attr) => (
                    <div className={cx('search-result')} tabIndex="1" {...attr}>
                        <Wrapper>
                            {searchResult.map((result) => (
                                <ProductItem key={result.id} data={result} />
                            ))}
                        </Wrapper>
                    </div>
                )}
                onClickOutside={handleHideResult}
            >
                <div className={cx('search')}>
                    <input
                        value={searchValue}
                        placeholder="Bạn Cần Tìm gì?"
                        spellCheck={false}
                        onChange={(e) => setSearchValue(e.target.value)}
                        onFocus={() => setIsResult(true)}
                    />
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </div>
            </Tippy>
        </div>
    );
}

export default Search;
