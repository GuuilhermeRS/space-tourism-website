import {
  Bodytext, Heading3, Heading4, Heading5,
} from '../../styles/global';

import { Section, Info, Nav } from './styles';

const { crew } = require('../../assets/data.json');

const currentCrewMember = crew[0];

export default function Crew() {
  return (
    <Section>
      <div>
        <Heading5>
          <strong>02 </strong>
          Meet your crew
        </Heading5>

        <Info>
          <Heading4>{currentCrewMember.role}</Heading4>
          <Heading3>{currentCrewMember.name}</Heading3>
          <Bodytext>{currentCrewMember.bio}</Bodytext>
        </Info>

        <Nav>
          <button type="button" className="active" />
          <button type="button" />
          <button type="button" />
          <button type="button" />
        </Nav>

      </div>

      <img
        src={currentCrewMember.images.png}
        alt={currentCrewMember.name}
      />
    </Section>
  );
}
