import { useState } from 'react';

import {
  Bodytext, Heading3, Heading4, Heading5,
} from '../../styles/global';

import { Section, Info, Nav } from './styles';

const { crew } = require('../../assets/data.json');

// const currentCrewMember = crew[0];

export default function Crew() {
  const [crewMembers] = useState(crew);
  const [currentCrewMember, setCurrentCrewMember] = useState(crew[0]);

  function handleChangeCrewMember(e) {
    const name = e.target.id;

    setCurrentCrewMember(crewMembers.find((crewMember) => crewMember.name === name));
  }

  const {
    role, name, bio, images,
  } = currentCrewMember;

  return (
    <Section>

      <div className="description">
        <Heading5>
          <strong>02 </strong>
          Meet your crew
        </Heading5>

        <Info>
          <Heading4>{role}</Heading4>
          <Heading3>{name}</Heading3>
          <Bodytext>{bio}</Bodytext>
        </Info>

        <Nav>
          {crewMembers.map((crewMember) => (
            <button
              id={crewMember.name}
              type="button"
              className={crewMember.name === name ? 'active' : ''}
              onClick={handleChangeCrewMember}
            />
          ))}

        </Nav>

      </div>

      <div className="img-container">
        <img
          src={images.png}
          alt={name}
        />
      </div>
    </Section>
  );
}
