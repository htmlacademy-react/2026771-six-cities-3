import Header from '../../components/header';
import { Link } from 'react-router-dom';
import '/src/not-found.css';

function Notfound(): JSX.Element {
  return (
    <>
      <Header />
      <div className="notfound-page">
        <div className="notfound-content">
          <Link to="/" className="notfound-button">
            <span>На главную</span>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Notfound;
