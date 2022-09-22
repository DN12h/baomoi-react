import Nav from '../components/Nav';
import Header from './components/Header';

function Default({ children }) {
    return (
        <div>
            <Header />
            <Nav />
            <div className="content">{children}</div>
        </div>
    );
}

export default Default;
