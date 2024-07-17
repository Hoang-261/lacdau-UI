/* eslint-disable array-callback-return */
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Wrapper from '~/component/Wrapper';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/svg-arrow.css';
import ProductSearch from '~/component/ProductSearch';
import { useEffect, useState, useContext } from 'react';
import { useDebounce } from '~/component/hook';
import { dataApi } from '~/App';

const cx = classNames.bind(styles);

function Search({ className }) {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [isResult, setIsResult] = useState(true);
    const debounce = useDebounce(searchValue, 800);
    const dataContext = useContext(dataApi);
    const dataSource = dataContext.data;
    useEffect(() => {
        if (!debounce.trim()) {
            setSearchResult([]);
            return;
        }
        dataSource.keyboard.map((data) => {
            if (data.display_name.toLowerCase().includes(debounce.toLowerCase())) {
                setSearchResult((prev) => [...prev, data]);
            }
        });
    }, [debounce]);

    const handleHideResult = () => {
        setIsResult(false);
    };
    const classes = cx({
        [className]: className,
    });
    return (
        <div className={classes}>
            <Tippy
                interactive
                visible={isResult && searchResult.length > 0}
                placement="bottom-end"
                render={(attr) => (
                    <div className={cx('search-result')} tabIndex="1" {...attr}>
                        <Wrapper>
                            {searchResult.map((result) => (
                                <ProductSearch key={result.id} data={result} />
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
