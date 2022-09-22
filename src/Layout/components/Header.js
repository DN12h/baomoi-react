import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../../site/imgs/bm-logo.png';
function Header() {
    const username = useSelector((state) => state.user.username);
    return (
        <div>
            <div className="top-header">
                <Link to="/">
                    <img src={logo} width="100px" />
                </Link>

                <form method="get" action="#" className="Search-content">
                    <input type="text" name="search" placeholder="Nhập nôi dung tìm kiếm" />
                    <button type="submit" id="search-icon">
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </form>
                <div className="icon">
                    {username ? (
                        <>
                            <Link to="/admin" className="user-info">
                                {username}
                            </Link>
                            <button className="btn-logout">Logout</button>
                        </>
                    ) : (
                        <Link to="/login">
                            <FontAwesomeIcon icon={faUser} />
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Header;
