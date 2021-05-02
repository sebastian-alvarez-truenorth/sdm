import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import { Layout } from 'components/common';
import Dashboard from 'pages/dashboard';

import 'styles/main.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            <Layout>
              <Dashboard />
            </Layout>
         </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
