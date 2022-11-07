import React,{useEffect,useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector,useDispatch } from "react-redux";
import {addToCart,setProductSlider} from '../../../../features/ecommerce/ecommerceSlice'
function Catalog() {
  const productListState = useSelector((shop) => shop.ecommerceApp.products);
  const newListState = useSelector((shop) => shop.ecommerceApp.new);
  const sunglassesListState = useSelector((shop) => shop.ecommerceApp.sunglasses);
  const [filterSlider,setFilterSlider] = useState(0);
  const dispatch = useDispatch();
  return (
    <div className="d-flex justify-content-center align-items-center flex-column">
        <div className="btn-group col-3 mt-5 bg-lightyellow p-3 d-flex">
        <button className="btn btn-light" onClick={() => setFilterSlider(0)}>
          Best Selling
        </button>
        <button className="btn btn-light" onClick={() => setFilterSlider(1)}>
          New
        </button>
        <button className="btn btn-light" onClick={() => setFilterSlider(2)}>
          Sunglasses
        </button>
      </div>
        <div className="col-11 row-cols-5 d-flex flex-wrap justify-content-around bg-lightyellow rounded-5 p-4 mt-5">
          {filterSlider===0 ? productListState.map((product) => (
            <div className="bg-light rounded-4 d-flex product flex-column m-3 p-3" key={product.id}>
              <img src={product.currentSrc} className="img-fluid" alt="" />
              <div className="product-body mt-3 d-flex flex-column">
              <h5 className="text-center">{product.name}</h5>
              <p className="text-center">Price: {product.price}</p>
              <div className="btn-group">
                <button onClick={()=>dispatch(setProductSlider({id:product.id,src:product.src}))} className="btn btn-light">.</button>
                <button onClick={()=>dispatch(setProductSlider({id:product.id,src:product.src2}))} className="btn btn-light">.</button>
                <button onClick={()=>dispatch(setProductSlider({id:product.id,src:product.src3}))} className="btn btn-light">.</button>
              </div>
              <button className="btn btn-dark mt-3 rounded-5" onClick={()=>{dispatch(addToCart({name:product.name,id:product.id,src:product.src,price:product.price,amount:product.amount}))}}>Add To Cart</button>
              </div>

            </div>
          )):""}
          {filterSlider===1 ? newListState.map((product) => (
            <div className="bg-light rounded-4 d-flex product flex-column m-3 p-3" key={product.id}>
              <img src={product.currentSrc} className="img-fluid" alt="" />
              <div className="product-body mt-3 d-flex flex-column">
              <h5 className="text-center">{product.name}</h5>
              <p className="text-center">Price: {product.price}</p>
              <div className="btn-group">
                <button onClick={()=>dispatch(setProductSlider({id:product.id,src:product.src}))} className="btn btn-light">.</button>
                <button onClick={()=>dispatch(setProductSlider({id:product.id,src:product.src2}))} className="btn btn-light">.</button>
                <button onClick={()=>dispatch(setProductSlider({id:product.id,src:product.src3}))} className="btn btn-light">.</button>
              </div>
              <button className="btn btn-dark mt-3 rounded-5" onClick={()=>{dispatch(addToCart({name:product.name,id:product.id,src:product.src,price:product.price,amount:product.amount}))}}>Add To Cart</button>
              </div>

            </div>
          )):""}
          {filterSlider===2 ? sunglassesListState.map((product) => (
            <div className="bg-light rounded-4 d-flex product flex-column m-3 p-3" key={product.id}>
              <img src={product.currentSrc} className="img-fluid" alt="" />
              <div className="product-body mt-3 d-flex flex-column">
              <h5 className="text-center">{product.name}</h5>
              <p className="text-center">Price: {product.price}</p>
              <div className="btn-group">
                <button onClick={()=>dispatch(setProductSlider({id:product.id,src:product.src}))} className="btn btn-light">.</button>
                <button onClick={()=>dispatch(setProductSlider({id:product.id,src:product.src2}))} className="btn btn-light">.</button>
                <button onClick={()=>dispatch(setProductSlider({id:product.id,src:product.src3}))} className="btn btn-light">.</button>
              </div>
              <button className="btn btn-dark mt-3 rounded-5" onClick={()=>{dispatch(addToCart({name:product.name,id:product.id,src:product.src,price:product.price,amount:product.amount}))}}>Add To Cart</button>
              </div>

            </div>
          )):""}
        </div>
      </div>
  )
}

export default Catalog