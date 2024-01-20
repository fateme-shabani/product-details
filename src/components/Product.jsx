import React from "react";
import { useState } from "react";

const Product = ({ data , test}) => {

  const click=(()=>{
    test(data.id)

  })

  return (
    <>
      <div className="product-item">
        <a href="#" className="link-item">
          <div className="product-style" onClick={click} >
            <h4>{data.product}</h4>
            <h4>{data.price}</h4>
            <div className='img-style'><img src={data.imgUrl} alt="عکس مروبط به محصول مورد نظر شما" /></div>
          </div>
        </a>
      </div>
    </>
  );
};

export default Product;
