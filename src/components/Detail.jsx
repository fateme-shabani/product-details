import React from "react";


const Detail = ({ data }) => {
  return (
    <>
      {/* <div className="product-style">
        <h4>{data.product}</h4>
        <h4>{data.price}</h4>
        <div className="img-style">
          <img src={data.imgUrl} alt="عکس مروبط به محصول مورد نظر شما" />
        </div>
      </div> */}

      <h3>{data.product}</h3>
    </>
  );
};

export default Detail;
