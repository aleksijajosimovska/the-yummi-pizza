import React from 'react';

import delivery from '../Delivery1.png'

function FinishOrder(){
    return(
        <div class="content">
        <div class="container container--cart">
          <div class="cart cart--empty">
            <h2>Корзина пустая</h2>
            <p>
              Вероятней всего, вы не заказывали ещё пиццу.<br />
              Для того, чтобы заказать пиццу, перейди на главную страницу.
            </p>
            <img src={delivery} alt="Empty cart" />
            <a href="/" class="button button--black">
              <span>Go to the Homepage</span>
            </a>
          </div>
        </div>
      </div>
    )
}

export default FinishOrder;