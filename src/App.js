import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/login/Login";
import Forgot from "./components/login/Forgot";
import Admin from "./components/Admin";

const Auth = () => {
  return (
    <Router>
      <Switch>
        <Route path='/admin' component={Admin} />
        <Route path='/login' component={Login} />
        <Route path='/forgot-password' component={Forgot} />
        <Route path='/' component={Login} />
        
      </Switch>
    </Router>
 
  );
}

export default Auth;
