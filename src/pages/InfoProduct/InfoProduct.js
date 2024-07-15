import classNames from 'classnames/bind';
import styles from '../Pages.module.scss';
import InfoProductItem from '~/component/InfoProductItem';
const cx = classNames.bind(styles);

function InfoProduct() {
    return (
        <div>
            <InfoProductItem />
        </div>
    );
}

export default InfoProduct;
