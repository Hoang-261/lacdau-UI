import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket, faXmark } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';
import axios from 'axios';
import { state } from '~/layouts/component/Header/Header';
const cx = classNames.bind(styles);

function Login() {
    const [valueLogin, setValueLogin] = useState('');
    const [password, setPassword] = useState('');
    const modal = useContext(state);
    const [hidePassword, setHidePassword] = useState(true);

    const handleShowPassword = () => {
        setHidePassword((prev) => !prev);
    };

    const handleShowModal = () => {
        modal.setShowModalLogin((prev) => !prev);
        setPassword('');
        setValueLogin('');
        setHidePassword(true);
    };

    const handleLogin = async () => {
        if (!valueLogin) {
            toast.error('Vui lòng nhập số điện thoại hoặc địa chỉ email');
            return;
        }
        if (!password) {
            toast.error('Vui lòng nhập mật khẩu');
            return;
        }

        let res = await axios.post('https://lacdau-be.onrender.com/api/login', {
            valueLogin,
            password,
        });

        if (+res.data.EC === 0) {
            toast.success('Đăng nhập thành công');
            modal.setShowModalLogin((prev) => !prev);
            modal.setIsUser(true);
        } else {
            toast.error(res.data.EM);
        }
    };
    return (
        <div>
            {!modal.showModalLogin ? (
                <>
                    <div className={cx('menu-item', 'd-none', 'd-lg-block')} onClick={handleShowModal}>
                        <p>ĐĂNG NHẬP</p>
                    </div>
                    <div className={cx('menu-item', 'd-block', 'd-lg-none')} onClick={handleShowModal}>
                        <FontAwesomeIcon icon={faRightToBracket} />
                    </div>
                </>
            ) : (
                modal.showModalLogin && (
                    <div className={cx('wrapper')}>
                        <div className={cx('overlay')}></div>
                        <div className={cx('dialog', 'col-8', 'col-md-4', 'col-sm-6')}>
                            <div className={cx('content', 'm-5')}>
                                <div className={cx('d-flex', 'py-5')}>
                                    <div className={cx('login-title', 'col-11', 'col-md-11', 'col-sm-11')}>
                                        <p>ĐĂNG NHẬP</p>
                                    </div>
                                    <FontAwesomeIcon onClick={handleShowModal} icon={faXmark} />
                                </div>
                                <div className={cx('row g-3')}>
                                    <div className={cx('col-md-12', 'input-group', 'input-group-lg')}>
                                        <input
                                            value={valueLogin}
                                            type="text"
                                            placeholder="Địa chỉ email hoặc số điện thoại"
                                            className={cx('form-control')}
                                            onChange={(e) => {
                                                setValueLogin(e.target.value);
                                            }}
                                        />
                                    </div>
                                    <div className={cx('col-md-12', 'input-group', 'input-group-lg')}>
                                        <input
                                            value={password}
                                            type={hidePassword ? 'password' : 'text'}
                                            placeholder="Mật khẩu"
                                            onChange={(e) => {
                                                setPassword(e.target.value);
                                            }}
                                            className={cx('form-control')}
                                        />
                                    </div>
                                    <div className={cx('col-12')}>
                                        <input type="checkbox" checked={!hidePassword} onChange={handleShowPassword} />
                                        <span>Hiện mật khẩu</span>
                                    </div>
                                    <div className={cx('col-12')}>
                                        <button
                                            type="submit"
                                            onClick={handleLogin}
                                            className={cx('btn', 'btn-primary', 'btn-lg')}
                                        >
                                            Đăng nhập
                                        </button>
                                    </div>
                                    <div className={cx('col-12')}>
                                        <button className={cx('btn', 'btn-link')}>Quên mật khẩu</button>
                                    </div>
                                    <hr />
                                    <div className={cx('col-12')}>
                                        <button
                                            onClick={modal.handleChangeModal}
                                            type="submit"
                                            className={cx('btn', 'btn-success', 'btn-lg')}
                                        >
                                            Tạo tài khoản
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            )}
        </div>
    );
}

export default Login;
