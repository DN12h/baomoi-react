import { useState } from 'react';
import logo from '../site/imgs/bao-moi-logo.png';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { redirect, useNavigate } from 'react-router-dom';
import { setUser } from '../redux/userSlice';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const user = useSelector((state) => state.user.username);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post(
                'http://localhost:8080/api/login',
                {
                    username: username,

                    password: password,
                },
                {
                    withCredentials: true,
                },
            )
            .then((res) => {
                dispatch(setUser(res.data.data));
                console.log(user);
                navigate('/');
            });
    };

    return (
        <div className="body-lg">
            <div className="login-page">
                <div className="form">
                    <form className="login-form">
                        <input type="text" placeholder="tên đăng nhập" onChange={(e) => setUsername(e.target.value)} />
                        <input type="password" placeholder="mật khẩu" onChange={(e) => setPassword(e.target.value)} />
                        <button onClick={(e) => handleSubmit(e)}>Đăng nhập</button>
                        <p className="message">
                            Chưa có <a href="./register.html">Đăng ký ngay</a>
                        </p>
                    </form>
                </div>

                <div>
                    <a href="./index.html">
                        <img className="img-logo" src={logo} alt="" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Login;
