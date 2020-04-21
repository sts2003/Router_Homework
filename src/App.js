import React from "react";
import { Page1, Page2, Page3, Page4 } from "./screens";
import { Route, Link } from "react-router-dom";
class App extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/page1"> Page 1 </Link>
          </li>

          <li>
            <Link to="/page2"> Page 2 </Link>
          </li>

          <li>
            <Link to="/page3"> Page 3 </Link>
          </li>

          <li>
            <Link to="/page4"> Page 4 </Link>
          </li>
        </ul>
        <hr />

        <Route exact path="/page1" component={Page1} />
        <Route exact path="/page2" component={Page2} />
        <Route exact path="/page3" component={Page3} />
        <Route exact path="/page4" component={Page4} />
      </div>
    );
  }
}

export default App;
