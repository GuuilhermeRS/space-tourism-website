import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Container } from './styles';
import Nav from '../Nav';

import { BackgroundContext } from '../../App';

export default function Header() {
  const { handleBackground } = useContext(BackgroundContext);

  return (
    <Container>
      <Link to="/" onClick={handleBackground}>
        <img src="/logo.svg" alt="Website logo" />
      </Link>
      <div style={{ zIndex: 1 }} />
      <Nav />
    </Container>
  );
}
