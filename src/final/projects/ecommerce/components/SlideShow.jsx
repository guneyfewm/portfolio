import React,{useState} from "react";
import SliderItem1 from "../img/slider1.jpg";
import SliderItem2 from "../img/slider2.jpg";
import "../index.css";
const SlideShow = () => {
  const [slideIndex,setSlideIndex] = useState(0);
  return (
    <div className="">
      <div className="slider d-flex justify-content-center">
        <img
          src={SliderItem1}
          className={slideIndex != 0 ? "d-none fadeIn img-fluid" : "fadeIn img-fluid" }
          alt=""
        />
        <img
          src={SliderItem2}
          className={slideIndex != 1 ? "d-none fadeIn img-fluid" : "fadeIn img-fluid" }
          alt=""
        />
        <img
          src={SliderItem1}
          className={slideIndex != 2 ? "d-none fadeIn img-fluid" : "fadeIn img-fluid" }
          alt=""
        />
      </div>
      <div className="btn-group col-12 d-flex justify-content-center">
        <span>
        <button className="btn btn-light" onClick={()=>setSlideIndex(0)}>.</button>
        <button className="btn btn-light" onClick={()=>setSlideIndex(1)}>.</button>
        <button className="btn btn-light" onClick={()=>setSlideIndex(2)}>.</button>
        </span>

      </div>
    </div>
  );
};

export default SlideShow;
