import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Product from "./components/Product";
import Cookies from "js-cookie";
import Detail from "./components/Detail";

function App() {
  const [products, setproducts] = useState([
    {
      product: "Patent leather shoes",
      price: "US$ 89.99",
      Pricewithoutdiscount: "US$ 99.99 ",
      imgUrl:
        "https://st.mngbcn.com/rcs/pics/static/T5/fotos/S20/57075966_70.jpg?ts=1689942795132&imwidth=247&imdensity=2",
      description:
        "100% goatskin. Rounded toe. Block heel. Side zip fastening. 3.94 in heel.Shoeupper: 94% goat leather,6% polyester. Lining: 95% polyester,5% polyurethane. Insole: 100% polyurethane. Sole: 100% rubber. Fixing sole: 100% glued",
    },
  ]);
  const [detail, setdetail] = useState([
    {
      id: 1,
      product: "Patent leather shoes",
      price: "US$ 89.99",
      Pricewithoutdiscount: "US$ 99.99 ",
      imgUrl:
        "https://st.mngbcn.com/rcs/pics/static/T5/fotos/S20/57075966_70.jpg?ts=1689942795132&imwidth=247&imdensity=2",
      description:
        "100% goatskin. Rounded toe. Block heel. Side zip fastening. 3.94 in heel.Shoeupper: 94% goat leather,6% polyester. Lining: 95% polyester,5% polyurethane. Insole: 100% polyurethane. Sole: 100% rubber. Fixing sole: 100% glued",
    },
    {
      id: 2,
      product: " Heeled sandals",
      price: "US$ 79.99 ",
      Pricewithoutdiscount: "US$ 139.99 ",
      imgUrl:
        "https://st.mngbcn.com/rcs/pics/static/T5/fotos/S20/57050109_40.jpg?ts=1680537835436&imwidth=502&imdensity=2",
    },
    {
      id: 3,
      product: "High-heeled sandals",
      price: "US$ 49.99",
      Pricewithoutdiscount: "US$ 79.99 ",
      imgUrl:
        "https://st.mngbcn.com/rcs/pics/static/T5/fotos/S20/57010031_88.jpg?ts=1678113543344&imwidth=502&imdensity=2",
    },
    {
      id: 4,
      product: "Pointed toe heel shoes ",
      price: "US$ 39.99",
      Pricewithoutdiscount: "US$ 39.99",
      imgUrl:
        "https://st.mngbcn.com/rcs/pics/static/T5/fotos/S20/57094773_80.jpg?ts=1686303382573&imwidth=502&imdensity=2",
    },
  ]);
  

  const productHandler= (id) => {
    detail.filter((item)=>{
        if(item.id==id){
          setproducts(item)
        }
    })
  }

  Cookies.set("name", "fateme", { expires: 7 });

  return (
    <>
      <div className="container">
        <div className="item-detail">
          {/* {detail &&
            detail.map((item) => {
              return item.description;
            })} */}
            <Detail data={products}/>
        </div>
        <div className="item-box">
          {detail.map((item) => {
            return (
              <Product
                className="product-detail"
                key={item.id}
                data={item}
                test={productHandler}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
