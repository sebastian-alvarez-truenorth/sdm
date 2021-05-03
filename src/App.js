import { BrowserRouter as Router, Route } from "react-router-dom";
import Routes from "routes";

import { Provider } from "react-redux";
import store from "redux/store";

import "styles/main.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Route path="/" render={(props) => <Routes {...props} />} />
        </Router>
      </div>
    </Provider>
  );
}

export default App;
