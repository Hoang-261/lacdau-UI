import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
function useDebounce(value, delay) {
    const [debounceValue, setDebounceValue] = useState(value);

    useEffect(() => {
        const handle = setTimeout(() => setDebounceValue(value), delay);
        return () => clearTimeout(handle);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);
    return debounceValue;
}
useDebounce.propTypes = {
    value: PropTypes.string.isRequired,
    delay: PropTypes.number.isRequired,
};
export default useDebounce;
