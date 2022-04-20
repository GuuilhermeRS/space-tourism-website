import { useState } from 'react';

import {
  Heading5, Heading3, Bodytext, Subheading2,
} from '../../styles/global';

import { Section, Nav, Container } from './styles';

const { technology } = require('../../assets/data.json');

export default function Technology() {
  const [tech] = useState(technology);
  const [currentTech, setCurrentTech] = useState(technology[0]);

  function handleChangeTech(e) {
    const { id } = e.target;

    setCurrentTech(tech[id]);
  }

  const { name, description, images } = currentTech;
  const currentIndex = tech.indexOf(currentTech);

  return (
    <Section>
      <Heading5>
        <strong>03 </strong>
        {' '}
        Space Launch 101
      </Heading5>

      <Container>
        <Nav>
          {tech.map((item, index) => (
            <button
              key={item.name}
              id={index}
              type="button"
              className={index === currentIndex ? 'active' : ''}
              onClick={handleChangeTech}
            >
              {index + 1}
            </button>
          ))}

        </Nav>

        <div className="info">
          <Subheading2>The terminology ...</Subheading2>
          <Heading3>{name}</Heading3>
          <Bodytext>{description}</Bodytext>
        </div>

        <picture>
          <source media="(max-width: 768px)" srcSet={images.landscape} alt={name} />
          <source media="(min-width: 769px)" src={images.portrait} alt={name} />
          <img src={images.portrait} alt={name} />
        </picture>
      </Container>
    </Section>
  );
}
