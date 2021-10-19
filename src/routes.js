import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from 'react-router-dom';
import BooksList from './views/booksList'
function Routes() {
    const history = useHistory();
    return (
    <div>
      <Router history={history}>
        <div>
          <Switch>
            <Route path="/" component={BooksList} />
         </Switch>
        </div>
      </Router>
    </div>
  );
}

export default Routes;