import { Link } from 'react-router-dom';
import { Navbar } from './styles';

export default function Nav() {
  return (
    <Navbar>

      <Link to="/">
        <span>00</span>
        Home
      </Link>
      <Link to="/destination">
        <span>00</span>
        Destination
      </Link>
      <Link to="/crew">
        <span>00</span>
        Crew
      </Link>
      <Link to="/technology">
        <span>00</span>
        Technology
      </Link>

    </Navbar>
  );
}
