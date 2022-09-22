import { Link } from 'react-router-dom';

function NavAdmin() {
    return (
        <div className="nav-container">
            <nav className="navbar">
                <ul className="ul-nav">
                    <li className="btn-square btn-choose">
                        <Link to="/admin/category" className="" href="#">
                            Manager Category
                        </Link>
                    </li>
                    <li>
                        <Link className="btn-square" to="/admin/news">
                            Manager News.
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default NavAdmin;
