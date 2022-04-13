import { Section, Title } from './styles';
import { Heading1, Heading5, Bodytext } from '../../styles/global';

export default function Home() {
  return (
    <Section>
      <Title>
        <Heading5>So, you want to travel to</Heading5>
        <Heading1>Space</Heading1>
        <Bodytext>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</Bodytext>
      </Title>

      <a href="/">Explore</a>

    </Section>
  );
}
