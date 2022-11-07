import { createSlice } from "@reduxjs/toolkit";
import Product1Photo from "../../final/projects/ecommerce/img/product1.png";
import Sunglasses1 from "../../final/projects/ecommerce/img/sunglasses.png";
import Sunglasses2 from "../../final/projects/ecommerce/img/sunglasses2.png";
import Sunglasses3 from "../../final/projects/ecommerce/img/sunglasses3.png";
import ColoredSunglasses1 from "../../final/projects/ecommerce/img/coloredglasses.png";
import ColoredSunglasses2 from "../../final/projects/ecommerce/img/coloredglasses2.png";
import CherryGlasses from "../../final/projects/ecommerce/img/cherryglasses.png";
import CherryGlasses2 from "../../final/projects/ecommerce/img/cherryglasses2.png";
import WhiteGlasses from "../../final/projects/ecommerce/img/whiteglasses.png";
import WhiteGlasses2 from "../../final/projects/ecommerce/img/whiteglasses2.png";
import WhiteGlasses3 from "../../final/projects/ecommerce/img/whiteglasses3.png";
import BlackGlasses from "../../final/projects/ecommerce/img/blackglasses.png";
import BlackGlasses2 from "../../final/projects/ecommerce/img/blackglasses2.png";
import BlackGlasses3 from "../../final/projects/ecommerce/img/blackglasses3.png";
import SummerSunglasses from "../../final/projects/ecommerce/img/summersunglasses.png";
import SummerSunglasses2 from "../../final/projects/ecommerce/img/summersunglasses2.png";
import SquareGlasses from "../../final/projects/ecommerce/img/squareglasses.png";
import SquareGlasses2 from "../../final/projects/ecommerce/img/squareglasses2.png";
import SquareGlasses3 from "../../final/projects/ecommerce/img/squareglasses3.png";
import ThinGlasses from "../../final/projects/ecommerce/img/thinglasses.png";
import ThinGlasses2 from "../../final/projects/ecommerce/img/thinglasses2.png";
import ThinGlasses3 from "../../final/projects/ecommerce/img/thinglasses3.png";
const initialState = {
  cart:
    localStorage.getItem("cart") !== null
      ? JSON.parse(localStorage.getItem("cart"))
      : [],
  cartTotal:
    localStorage["total"] !== undefined ? JSON.parse(localStorage["total"]) : 0,
  new: [
    {
        name: "Thin Glasses",
        price: 400,
        src: ThinGlasses,
        src2: ThinGlasses2,
        src3: ThinGlasses3,
  
        currentSrc: ThinGlasses,
        id: 1,
        amount: 1,
      },
    {
      name: "Sunglasses",
      price: 600,
      src: Sunglasses1,
      src2: Sunglasses2,
      src3: Sunglasses3,
      currentSrc: Sunglasses1,
      id: 2,
      amount: 1,
    },
    {
      name: "Colored Sunglasses",
      price: 450,
      src: ColoredSunglasses1,
      src2: ColoredSunglasses2,
      src3: Sunglasses3,

      currentSrc: ColoredSunglasses1,
      id: 3,
      amount: 1,
    },
  ],
  sunglasses: [
    {
      name: "Colored Sunglasses",
      price: 450,
      src: ColoredSunglasses1,
      src2: ColoredSunglasses2,
      src3: Sunglasses3,

      currentSrc: ColoredSunglasses1,
      id: 3,
      amount: 1,
    },
    {
      name: "Sunglasses",
      price: 600,
      src: Sunglasses1,
      src2: Sunglasses2,
      src3: Sunglasses3,

      currentSrc: Sunglasses1,
      id: 2,
      amount: 1,
    },
  ],
  products: [
    {
      name: "Thin Glasses",
      price: 400,
      src: ThinGlasses,
      src2: ThinGlasses2,
      src3: ThinGlasses3,

      currentSrc: ThinGlasses,
      id: 1,
      amount: 1,
    },
    {
      name: "Sunglasses",
      price: 600,
      src: Sunglasses1,
      src2: Sunglasses2,
      src3: Sunglasses3,
      currentSrc: Sunglasses1,
      id: 2,
      amount: 1,
    },
    {
      name: "Colored Sunglasses",
      price: 450,
      src: ColoredSunglasses1,
      src2: ColoredSunglasses2,
      src3: Sunglasses3,

      currentSrc: ColoredSunglasses1,
      id: 3,
      amount: 1,
    },
    {
      name: "Basic Red Glasses",
      price: 500,
      src: CherryGlasses,
      src2: CherryGlasses2,
      src3: CherryGlasses,

      currentSrc: CherryGlasses,
      id: 4,
      amount: 1,
    },
    {
      name: "Square Glasses",
      price: 750,
      src: SquareGlasses,
      src2: SquareGlasses2,
      src3: SquareGlasses3,

      currentSrc: SquareGlasses,
      id: 5,
      amount: 1,
    },
    {
      name: "Summer Glasses",
      price: 600,
      src: SummerSunglasses,
      src2: SummerSunglasses2,
      src3: SummerSunglasses,

      currentSrc: SummerSunglasses,
      id: 6,
      amount: 1,
    },
    {
      name: "White Glasses",
      price: 540,
      src: WhiteGlasses,
      src2: WhiteGlasses2,
      src3: WhiteGlasses3,

      currentSrc: WhiteGlasses,
      id: 7,
      amount: 1,
    },
    {
      name: "Black Glasses",
      price: 540,
      src: BlackGlasses,
      src2: BlackGlasses2,
      src3: BlackGlasses3,

      currentSrc: BlackGlasses,
      id: 8,
      amount: 1,
    },

  ],
};
var foundornot;
var total = 0;
const calculateCart = (state) => {
  state.cart.map((item) => (total += item.amount * item.price));
  state.cartTotal = total;
  localStorage["total"] = state.cartTotal;
  total = 0;
};
export const ecommerceSlice = createSlice({
  name: "ecommerceApp",
  initialState,
  reducers: {
    deleteFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id != action.payload.id);
      localStorage["cart"] = JSON.stringify(state.cart.map((item) => item));
      if (state.cart === []) {
        state.cartTotal = 0;
        localStorage["total"] = state.cartTotal;
      } else {
        calculateCart(state);
      }
    },
    clearCart: (state) => {
      state.cart = [];
      localStorage["cart"] = [];
    },
    addToCart: (state, action) => {
      foundornot = state.cart.findIndex(
        (item, index) =>
          item.id == action.payload.id ? (state.cart[index].amount += 1) : ""
        /* state.cart.map((item,index)=>item.id==action.payload.id ? state.cart[index]=null:""); */
      );
      console.log(foundornot);
      if (foundornot == -1) {
        state.cart = [
          ...state.cart,

          {
            name: action.payload.name,
            price: action.payload.price,
            src: action.payload.src,
            id: action.payload.id,
            amount: action.payload.amount,
          },
        ];
      }

      /*       duplicateItems = state.cart.filter(
        (item) => item.name == action.payload.name
      );
      duplicateItems[0].amount += 1;
      state.cart = [...state.cart + duplicateItems[0]] */
      localStorage.setItem(
        "cart",
        JSON.stringify(state.cart.map((item) => item))
      );
      state.cartTotal = +state.cartTotal + action.payload.price; //turn carttotal to a number with +carttotal
      localStorage.setItem("total", JSON.stringify(state.cartTotal));
    },

    changeAmount: (state, action) => {
      state.cart.map((product) =>
        product.id === action.payload.id
          ? (product.amount = Number(action.payload.value))
          : ""
      );
      localStorage.setItem(
        "cart",
        JSON.stringify(state.cart.map((item) => item))
      );
      calculateCart(state);
    },
    setProductSlider: (state, action) => {
      state.products.map((item) =>
        item.id === action.payload.id
          ? (item.currentSrc = action.payload.src)
          : ""
      );
    },
    setNewSlider: (state, action) => {
      state.new.map((item) =>
        item.id === action.payload.id
          ? (item.currentSrc = action.payload.src)
          : ""
      );
    },
    setSunglassesSlider: (state, action) => {
      state.sunglasses.map((item) =>
        item.id === action.payload.id
          ? (item.currentSrc = action.payload.src)
          : ""
      );
    },
  },
});
export const {
  addToCart,
  clearCart,
  deleteFromCart,
  changeAmount,
  removeFromCart,
  setProductSlider,
  setNewSlider,
  setSunglassesSlider,
} = ecommerceSlice.actions;
export default ecommerceSlice.reducer;
