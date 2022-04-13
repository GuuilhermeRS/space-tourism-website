import { Route, Switch, useLocation } from 'react-router-dom';

import Home from './pages/Home';

export default function Routes() {
  const location = useLocation();

  return (
    <Switch location={location}>
      <Route path="/" exact component={Home} />
      <Route path="/destination" />
    </Switch>
  );
}
