import React from 'react';

import ProductDate from './ProductDate';
import Card from './Card';
import './ProductItem.css';

const ProductItem = (props) => {
    function clickHandler()
    {
        console.log("Button Clicked");
    }

  

  return (
    <Card className='product-item'>
      <ProductDate date={props.date} />
      <div className='product-item__description'>
        <h2>{props.title}</h2>
      </div>
      <button onClick={clickHandler}>Add To Cart</button>
    </Card>
  );
}

export default ProductItem;