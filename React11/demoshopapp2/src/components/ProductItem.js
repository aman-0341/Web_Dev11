import React, { useState }  from 'react';

import ProductDate from './ProductDate';
import Card from './Card';
import './ProductItem.css';

const ProductItem = (props) => {
    const[title,setTitle]=useState(props.title);
    function clickHandler()
    {
        // title="popcorn";
        setTitle("popcorn");
        console.log("Button Clicked");
    }

  

  return (
    <Card className='product-item'>
      <ProductDate date={props.date} />
      <div className='product-item__description'>
        <h2>{title}</h2>
      </div>
      <button onClick={clickHandler}>Add To Cart</button>
    </Card>
  );
}

export default ProductItem;