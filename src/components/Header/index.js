import { Link } from 'react-router-dom';
import { Container } from './styles';
import Nav from '../Nav';

export default function Header() {
  return (
    <Container>
      <Link to="/">
        <img src="/logo.svg" alt="Website logo" />
      </Link>
      <div style={{ zIndex: 1 }} />
      <Nav />
    </Container>
  );
}
