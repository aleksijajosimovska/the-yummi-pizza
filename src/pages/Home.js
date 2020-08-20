import React from 'react';


import image5 from '../image 5.png';
import image6 from '../image 6.png';
import image7 from '../image 7.png';

function Home(){
    return(<div className="container">
          
    <h2 className="content__title">Menu</h2>
    <div className="content__items">
      <div className="pizza-block">
<img
className="pizza-block__image"
src={image6}
alt="Pizza"
/>
<h4 className="pizza-block__title">Prosciutto e Funghi</h4>
<div className="pizza-block__selector">
<ul>
<li className="active">Description:</li>
<li>Tomato sauce, mozzarella, ham and oregano</li>
</ul>

</div>
<div className="pizza-block__bottom">
<div className="pizza-block__price">15 €</div>
<div className="button button--outline button--add">
<svg
  width="12"
  height="12"
  viewBox="0 0 12 12"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
    fill="white"
  />
</svg>
<span>Order now</span>

</div>
</div>
</div> <div className="pizza-block">
<img
className="pizza-block__image"
src={image7}
alt="Pizza"
/>
<h4 className="pizza-block__title">Margherita</h4>
<div className="pizza-block__selector">
<ul>
<li className="active">Description:</li>
<li>Tomato sauce, mozzarella and oregano</li>
</ul>

</div>
<div className="pizza-block__bottom">
<div className="pizza-block__price">13 €</div>
<div className="button button--outline button--add">
<svg
  width="12"
  height="12"
  viewBox="0 0 12 12"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
    fill="white"
  />
</svg>
<span>Order now</span>

</div>
</div>
</div> <div className="pizza-block">
<img
className="pizza-block__image"
src={image5}
alt="Pizza"
/>
<h4 className="pizza-block__title">Caprese</h4>
<div className="pizza-block__selector">
<ul>
<li className="active">Description:</li>
<li>Mozzarella and sliced tomato</li>
</ul>

</div>
<div className="pizza-block__bottom">
<div className="pizza-block__price">8 €</div>
<div className="button button--outline button--add">
<svg
  width="12"
  height="12"
  viewBox="0 0 12 12"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
    fill="white"
  />
</svg>
<span>Order now</span>

</div>
</div>
</div> <div className="pizza-block">
<img
className="pizza-block__image"
src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
alt="Pizza"
/>
<h4 className="pizza-block__title">Emiliana</h4>
<div className="pizza-block__selector">
<ul>
<li className="active">Description:</li>
<li>Tomato sauce,mozzarella, mushrooms, pepperoni, and Stracchino (soft cheese)</li>
</ul>

</div>
<div className="pizza-block__bottom">
<div className="pizza-block__price">11 €</div>
<div className="button button--outline button--add">
<svg
  width="12"
  height="12"
  viewBox="0 0 12 12"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
    fill="white"
  />
</svg>
<span>Order now</span>

</div>
</div>
</div> <div className="pizza-block">
<img
className="pizza-block__image"
src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
alt="Pizza"
/>
<h4 className="pizza-block__title">Mediterranea</h4>
<div className="pizza-block__selector">
<ul>
<li className="active">Description:</li>
<li>Tomato sauce, buffalo mozzarella, cherry tomatoes and pepper</li>
</ul>

</div>
<div className="pizza-block__bottom">
<div className="pizza-block__price">13 €</div>
<div className="button button--outline button--add">
<svg
  width="12"
  height="12"
  viewBox="0 0 12 12"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
    fill="white"
  />
</svg>
<span>Order now</span>

</div>
</div>
</div> <div className="pizza-block">
<img
className="pizza-block__image"
src={image6}
alt="Pizza"
/>
<h4 className="pizza-block__title">Mare e Monti</h4>
<div className="pizza-block__selector">
<ul>
<li className="active">Description:</li>
<li>Mozzarella, tomato sauce, seafood and porcino mushrooms</li>
</ul>

</div>
<div className="pizza-block__bottom">
<div className="pizza-block__price">7,5 €</div>
<div className="button button--outline button--add">
<svg
  width="12"
  height="12"
  viewBox="0 0 12 12"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
    fill="white"
  />
</svg>
<span>Order now</span>

</div>
</div>
</div> <div className="pizza-block">
<img
className="pizza-block__image"
src={image7}
alt="Pizza"
/>
<h4 className="pizza-block__title">Pizza al Pesto</h4>
<div className="pizza-block__selector">
<ul>
<li className="active">Description:</li>
<li>Tomato,mozzarella, Genoese pesto, pine nuts, and olives</li>
</ul>

</div>
<div className="pizza-block__bottom">
<div className="pizza-block__price">8,5 €</div>
<div className="button button--outline button--add">
<svg
  width="12"
  height="12"
  viewBox="0 0 12 12"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
    fill="white"
  />
</svg>
<span>Order now</span>

</div>
</div>
</div> <div className="pizza-block">
<img
className="pizza-block__image"
src={image5}
alt="Pizza"
/>
<h4 className="pizza-block__title">Capricciosa</h4>
<div className="pizza-block__selector">
<ul>
<li className="active">Description:</li>
<li>Tomato sauce, mozzarella, ham, artichokes, mushrooms, and olives</li>
</ul>

</div>
<div className="pizza-block__bottom">
<div className="pizza-block__price">12 €</div>
<div className="button button--outline button--add">
<svg
  width="12"
  height="12"
  viewBox="0 0 12 12"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
    fill="white"
  />
</svg>
<span>Order now</span>

</div>
</div>
</div> 
    </div>
  </div>)
}

export default Home;