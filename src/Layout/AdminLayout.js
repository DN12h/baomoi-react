import Nav from '../components/Nav';
import NavAdmin from '../components/NavAdmin';
import Header from './components/Header';

function AdminLayout({ children }) {
    return (
        <div>
            <Header />
            <NavAdmin />
            <div>
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default AdminLayout;
