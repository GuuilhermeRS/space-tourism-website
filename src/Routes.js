import { Route, Switch, useLocation } from 'react-router-dom';

import Home from './pages/Home';
import Destination from './pages/Destination';
import Crew from './pages/Crew';

export default function Routes() {
  const location = useLocation();

  return (
    <Switch location={location}>
      <Route path="/" exact component={Home} />
      <Route path="/destination" component={Destination} />
      <Route path="/crew" component={Crew} />
    </Switch>
  );
}
