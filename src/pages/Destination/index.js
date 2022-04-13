import { useState } from 'react';

import {
  Bodytext, Heading2, Heading5, Subheading1, Subheading2,
} from '../../styles/global';
import {
  Section, Planet, PlanetList, PlanetInfo,
} from './styles';

const { destinations } = require('../../assets/data.json');

export default function Destination() {
  const [planets, setPlanets] = useState(destinations);
  const [currentPlanet, setCurrentPlanet] = useState(planets[0]);

  function handleChangePlanet(e) {
    const name = e.target.id;

    setCurrentPlanet(planets.find((planet) => planet.name === name));
    setPlanets((prevState) => prevState.map((planet) => (planet.name === name
      ? { ...planet, active: true }
      : { ...planet, active: false }
    )));
  }

  return (
    <Section>
      <Heading5>
        <strong>01 </strong>
        Pick your destination
      </Heading5>

      <Planet>
        <img src={currentPlanet.images.png} alt={currentPlanet.name} />

        <div>
          <PlanetList>
            {planets.map((planet) => (
              <li
                key={planet.name}
                className={planet.active ? 'active' : ''}
              >
                <button
                  type="button"
                  id={planet.name}
                  onClick={handleChangePlanet}
                >
                  {planet.name}
                </button>
              </li>
            ))}
          </PlanetList>

          <Heading2>{currentPlanet.name}</Heading2>
          <Bodytext>{currentPlanet.description}</Bodytext>

          <PlanetInfo>
            <div>
              <Subheading2>AVG. Distance</Subheading2>
              <Subheading1>{currentPlanet.distance}</Subheading1>
            </div>
            <div>
              <Subheading2>Est. Travel Time</Subheading2>
              <Subheading1>{currentPlanet.travel}</Subheading1>
            </div>
          </PlanetInfo>
        </div>
      </Planet>
    </Section>
  );
}
