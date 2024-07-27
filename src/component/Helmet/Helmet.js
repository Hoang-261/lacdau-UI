import React from 'react';

const Helmet = ({ title, children }) => {
    document.title = title;
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return <div>{children}</div>;
};
export default Helmet;
