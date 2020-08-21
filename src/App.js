import React, {useEffect,useState} from 'react';
import { Route } from 'react-router-dom';
import { Header } from '../src/components';
import { Home, Cart, FinishOrder } from '../src/pages';



function App() {
  

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(process.env.REACT_APP_API_ENDPOINT)
    .then(res => res.json());
  
 console.log(result)
};

fetchData();
  },[])
  return (
    <div className="wrapper">
     <Header />
      <div className="content">
      <Route path="/" component={Home} exact />
      <Route path="/cart" component={Cart} exact />
      <Route path="/finish-order" component={FinishOrder} exact />
      </div>
    </div>
  );
}

export default App;