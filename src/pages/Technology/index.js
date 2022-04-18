import { useState } from 'react';

import {
  Heading5, Heading3, Bodytext, Subheading2,
} from '../../styles/global';

import { Section, Nav, Container } from './styles';

const { technology } = require('../../assets/data.json');

export default function Technology() {
  const [tech, setTech] = useState(technology);
  const [currentTech, setCurrentTech] = useState(technology[0]);

  function handleChangeTech(e) {
    const { id } = e.target;
    const { name } = tech[id];

    setCurrentTech(technology[id]);
    setTech((prevState) => prevState.map(
      (item) => (item.name === name
        ? { ...item, active: true }
        : { ...item, active: false }),
    ));
  }

  return (
    <Section>
      <Heading5>
        <strong>03 </strong>
        {' '}
        Space Launch 101
      </Heading5>

      <Container>
        <Nav>
          <button
            id="0"
            type="button"
            className="active"
            onClick={handleChangeTech}
          >
            1
          </button>
          <button
            id="1"
            type="button"
            onClick={handleChangeTech}
          >
            2
          </button>
          <button
            id="2"
            type="button"
            onClick={handleChangeTech}
          >
            3
          </button>

        </Nav>

        <div className="tech">
          <div className="info">
            <Subheading2>The terminology ...</Subheading2>
            <Heading3>{currentTech.name}</Heading3>
            <Bodytext>{currentTech.description}</Bodytext>
          </div>

          <img src={currentTech.images.portrait} alt={currentTech.name} />
        </div>
      </Container>
    </Section>
  );
}
