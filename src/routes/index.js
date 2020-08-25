import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Store from '../pages/store';
import Succesful from '../pages/Succesful';
import NotFound from '../pages/NotFound';
import Cart from "../pages/cart";

const Routes = () => {

  
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(process.env.REACT_APP_API_ENDPOINT)
    .then(res => res.json());
  
 console.log(result)
};

fetchData();
  },[])
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={Store}/>
          <Route path="/cart" component={Cart} />
          <Route path="/succesful" component={Succesful} />
          <Route path="*" component={NotFound} />
        </Switch>
    </Router>
  );
}

export default Routes;