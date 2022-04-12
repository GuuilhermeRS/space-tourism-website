import { Container } from './styles';
import Nav from '../Nav';

export default function Header() {
  return (
    <Container>
      <img src="/logo.svg" alt="Website logo" />
      <div />
      <Nav />
    </Container>
  );
}
