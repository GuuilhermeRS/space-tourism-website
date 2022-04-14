import { useState } from 'react';

import {
  Bodytext, Heading3, Heading4, Heading5,
} from '../../styles/global';

import { Section, Info, Nav } from './styles';

const { crew } = require('../../assets/data.json');

// const currentCrewMember = crew[0];

export default function Crew() {
  const [crewMembers, setCrewMembers] = useState(crew);
  const [currentCrewMember, setCurrentCrewMember] = useState(crew[0]);

  function handleChangeCrewMember(e) {
    const name = e.target.id;

    setCurrentCrewMember(crewMembers.find((crewMember) => crewMember.name === name));
    setCrewMembers((prevState) => prevState.map(
      (member) => (member.name === name
        ? { ...member, active: true }
        : { ...member, active: false }),
    ));
  }

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
          {crewMembers.map((crewMember) => (
            <button
              id={crewMember.name}
              type="button"
              className={crewMember.active ? 'active' : ''}
              onClick={handleChangeCrewMember}
            />
          ))}

        </Nav>

      </div>

      <img
        src={currentCrewMember.images.png}
        alt={currentCrewMember.name}
      />
    </Section>
  );
}
