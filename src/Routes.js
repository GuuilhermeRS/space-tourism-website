import { Route, Switch, useLocation } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';

import Home from './pages/Home';
import Destination from './pages/Destination';
import Crew from './pages/Crew';
import Technology from './pages/Technology';
import ContentStyles from './routesStyles';

export default function Routes() {
  const location = useLocation();
  const transitions = useTransition(location, {
    from: {
      opacity: 0, transform: 'translateY(-50px)', position: 'absolute',
    },
    enter: {
      opacity: 1, transform: 'translateY(0)', transition: '.3s', position: 'absolute',
    },
  });

  return transitions((props, item) => (
    <animated.div style={props}>
      <Switch location={item}>
        <ContentStyles>
          <Route path="/" exact component={Home} />
          <Route path="/destination" component={Destination} />
          <Route path="/crew" component={Crew} />
          <Route path="/technology" component={Technology} />
        </ContentStyles>
      </Switch>
    </animated.div>
  ));
}
