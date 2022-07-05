import react from "react"
import * as ReactDOM from 'react-dom';
import "./home.css"

export default function inicio(){
    return (
        <Router>
          <Navbar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/' component={SignOut} />
            <Route path='/sign-up' component={SignUp} />
          </Switch>
        </Router>
      );
}