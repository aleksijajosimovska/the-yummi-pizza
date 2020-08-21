import React from 'react';
import { Route } from 'react-router-dom';
import { Header } from '../src/components';
import { Home, Cart, FinishOrder } from '../src/pages';



function App() {
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