import classNames from 'classnames/bind';
import styles from '../Login/Login.module.scss';
import { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faXmark } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { state } from '~/layouts/component/Header/Header';
import axios from 'axios';

const cx = classNames.bind(styles);

function Register() {
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [hidePassword, setHidePassword] = useState(true);

    const modal = useContext(state);

    const handleShowModal = () => {
        modal.setShowModalRegister((prev) => !prev);
        setEmail('');
        setPhone('');
        setPassword('');
        setConfirmPassword('');
        setHidePassword(true);
    };
    const handleShowPassword = () => {
        setHidePassword((prev) => !prev);
    };
    const inValidInputs = () => {
        const re = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/;
        if (!email) {
            toast.error('Vui lòng nhập Email');
            return false;
        }
        if (!re.test(email)) {
            toast.error('Vui lòng nhập đúng email');
            return false;
        }
        if (!phone) {
            toast.error('Vui lòng nhập số điện thoại');
            return false;
        }
        if (!password) {
            toast.error('Vui lòng nhập mật khẩu');
            return false;
        }
        if (!password.match(/[A-Z]/)) {
            toast.error('Mật khẩu phải có chữ in hoa');
            return false;
        }

        if (!password.match(/[0-9]/)) {
            toast.error('Mật khẩu phải có chữ số');
            return false;
        }

        if (!password.match(/[!@#$%^&*]/)) {
            toast.error('Mật khẩu phải có tự đặc biệt !@#$%^&*');
            return false;
        }

        if (password.length < 8) {
            toast.error('Mật khẩu phải có ít nhất 8 ký tự');
            return false;
        }
        if (!confirmPassword) {
            toast.error('Vui lòng xác nhận mật khẩu');
            return false;
        }

        if (password !== confirmPassword) {
            toast.error('Xác nhận mật khẩu không đúng');
            return false;
        }

        return true;
    };
    const handleRegister = async () => {
        let checkValidate = inValidInputs();

        if (checkValidate === true) {
            let res = await axios.post('http://localhost:8080/api/users', {
                email,
                phone,
                password,
            });
            if (+res.data.EC === 0) {
                toast.success('Tạo tài khoản thành công');
                handleShowModal();
            } else {
                toast.error(res.data.EM);
            }
        }
    };

    return (
        <div>
            {!modal.showModalRegister ? (
                <>
                    <div className={cx('menu-item', 'd-none', 'd-lg-block')} onClick={handleShowModal}>
                        <p>Tạo Tài Khoản</p>
                    </div>
                    <div className={cx('menu-item', 'd-block', 'd-lg-none')} onClick={handleShowModal}>
                        <FontAwesomeIcon icon={faUserPlus} />
                    </div>
                </>
            ) : (
                <div className={cx('wrapper')}>
                    <div className={cx('overlay')}></div>
                    <div className={cx('dialog', 'col-8', 'col-md-4', 'col-sm-6')}>
                        <div className={cx('content', 'm-5')}>
                            <div className={cx('d-flex', 'py-5')}>
                                <div className={cx('register-title', 'col-11', 'col-md-11', 'col-sm-11')}>
                                    <p>Tạo tài khoản</p>
                                </div>
                                <FontAwesomeIcon onClick={handleShowModal} icon={faXmark} />
                            </div>
                            <div className={cx('row g-3')}>
                                <div className={cx('col-md-12')}>
                                    <label className={cx('form-label')}>Email *</label>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className={cx('form-control')}
                                    />
                                </div>
                                <div className={cx('col-md-12')}>
                                    <label className={cx('form-label')}>Số điện thoại *</label>

                                    <input
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        className={cx('form-control')}
                                    />
                                </div>
                                <div className={cx('col-md-12')}>
                                    <label className={cx('form-label')}>Mật khẩu *</label>
                                    <input
                                        type={hidePassword ? 'password' : 'text'}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className={cx('form-control')}
                                    />
                                </div>
                                <div className={cx('col-md-12')}>
                                    <label className={cx('form-label')}>Nhập lại mật khẩu *</label>
                                    <input
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        type={hidePassword ? 'password' : 'text'}
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
                                        onClick={handleRegister}
                                        className={cx('btn', 'btn-primary', 'btn-lg')}
                                    >
                                        Tạo tài khoản
                                    </button>
                                </div>
                                <hr />
                                <div className={cx('col-12')}>
                                    <button
                                        onClick={modal.handleChangeModal}
                                        type="submit"
                                        className={cx('btn', 'btn-success', 'btn-lg')}
                                    >
                                        Đăng nhập
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Register;
