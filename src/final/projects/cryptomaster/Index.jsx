import { useState, useEffect, useRef } from "react";
import React from "react";
import axios from "axios";
import "./index.css";
const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const [coinList, setCoinList] = useState([{name:""}]);

  const [pageIndex, setPageIndex] = useState(0);
  const [searchResult, setSearchResult] = useState([
    {
      large:
        "https://assets.coingecko.com/coins/images/20764/large/reth.png?1637652366",
      symbol: "Search anything!",
      name: "By searching any coin you want on the search bar you create a new get request from Coin Gecko API and display it on screen! ",
    },
    {
      large:
        "https://assets.coingecko.com/coins/images/25181/large/thumbnail.png",
      symbol: "The Fetch Process Is Divided Into Pieces!",
      name: "This app doesn't fetch all the data in it from the start. By clicking the buttons down below you make a get request and change the current state of listed coins!",
    },
    {
      large:
        "https://assets.coingecko.com/coins/images/8284/large/01_LunaClassic_color.png",
      symbol: "Search results are instant!",
      name: "No need for buttons! You create a get request instantly with every letter you type!",
    },
    {
      large:
        "https://assets.coingecko.com/coins/images/878/large/decentraland-mana.png?1550108745",
      symbol: "Technologies Used",
      name: "This project has been built using React.js, Bootstrap 5, Axios and some custom CSS!",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const searchRef = useRef();
  useEffect(() => {
    getApi();
  }, [pageIndex]);
  useEffect(() => {}, [inputValue]);

  const getApi = async () => {
    let coinListPage = await axios.get(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=${
        pageIndex + 1
      }&sparkline=false&price_change_percentage=1h%2C24h%2C7d`
    );
    setCoinList(coinListPage.data);
  };
  const getSearchResult = async (search) => {
    if (search.length >= 2) {
      const result = await axios.get(
        `https://api.coingecko.com/api/v3/search?query=${search}`
      );
      setSearchResult(result.data.coins);
    }
  };
  const handleChange = async (e) => {
    getSearchResult(inputValue);
    setInputValue(e.target.value);
  };

  return (
    <div className="bodybg">
      <div
        onClick={() => document.location.reload()}
        className="col-xs-12 flex-column col-md-8 col-lg-6 mt-5 animation-bg-fast rounded-5 container-fluid d-flex justify-content-center py-4"
      >
        <h2 className="text-light text-center main-title">Crypto Master</h2>
        <h6 className="text-center text-light lead fs-6">Crypto searching made easy!</h6>
      </div>
      <div className="col-xs-12 mt-5 d-flex justify-content-center d-inline">
        <form
          type="submit"
          className=" position-relative"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            value={inputValue}
            className="border-0 text-dark nofocuscolor p-3 px-5 col-12 bg-lightcolor leftround"
            onChange={(ev) => handleChange(ev)}
            placeholder="Search a cool Crypto!"
          />
          <button
            className="border-0 d-none noborderonactive text-dark animation-bg p-3 rounded-5 right-round ms-3"
            onClick={() => {}}
          >
            Search
          </button>
        </form>
      </div>

      <br></br>
      <div>
        <div className="search container-fluid col-lg-8 col-xl-6 d-flex flex-wrap justify-content-between bg-lightcolor">
          {searchResult.map((coin) => (
            <div className="d-flex col-lg-6" key={coin.name}>
              <img src={coin.large} className="customWidth img-fluid" alt="" />
              <div className="coin-body ms-3">
                <p className="display-6 fs-2 lead">{coin.symbol}</p>
                <p className="lead">{coin.name}</p>
                <p>{coin.market_cap_rank}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <h3 className="col-12 text-center mt-4 mb-5 text-dark display-5">
        Page {pageIndex + 1}
      </h3>
      <div className="d-flex bg-white text-dark rounded-5 justify-content-center">
        <button
          onClick={() => setPageIndex(pageIndex > 0 ? pageIndex - 1 : 0)}
          className={"btn col-1 rounded-0"}
        >
          {"\u21E0"}
        </button>
        <button
          onClick={() => setPageIndex(0)}
          className={`btn col-1 rounded-0 ${
            pageIndex == 0 ? " text-muted" : ""
          }`}
        >
          1
        </button>
        <button
          onClick={() => setPageIndex(1)}
          className={`btn col-1 rounded-0 ${
            pageIndex == 1 ? " text-muted" : ""
          }`}
        >
          2
        </button>
        <button
          onClick={() => setPageIndex(2)}
          className={`btn col-1 rounded-0 ${
            pageIndex == 2 ? " text-muted" : ""
          }`}
        >
          3
        </button>
        <button
          onClick={() => setPageIndex(3)}
          className={`btn col-1 rounded-0 ${
            pageIndex == 3 ? " text-muted" : ""
          }`}
        >
          4
        </button>
        <button
          onClick={() => setPageIndex(4)}
          className={`btn col-1 rounded-0 ${
            pageIndex == 4 ? " text-muted" : ""
          }`}
        >
          5
        </button>
        <button
          onClick={() => setPageIndex(5)}
          className={`btn col-1 rounded-0 ${
            pageIndex == 5 ? " text-muted" : ""
          }`}
        >
          6
        </button>
        <button
          onClick={() => setPageIndex(pageIndex + 1)}
          className="btn col-1 rounded-0"
        >
          {"\u21E2"}
        </button>
      </div>
      <div className="row">
        <div className="col-12 coinitems bg-darkbluegradient pt-3 p-lg-5  rounded-5 d-flex flex-wrap justify-content-center mt-2">
          {coinList.map((coin) => (
            <div
              key={coin.name}
              className="d-flex position-relative p-2 mb-4 m-sm-3 rounded-5 bg-darkblue text-dark"
            >
              <img src={coin.image} className="coinImg mt-4 me-3"></img>
              <div className="m-2 coinpage-body coinSize">
                <h5 className="display-6 fs-3 word-break ">{coin.name.slice(0,20)}</h5>
                <h5 className="lead ">{coin.current_price}$</h5>
                <h5 className="lead ">Rank:{coin.market_cap_rank}</h5>
                <div className="coin-items-body mt-3">
                  <span className="d-flex">
                    1Hour
                    <h6
                      className={`ms-3 lead ${
                        coin.price_change_percentage_1h_in_currency >= 0
                          ? "priceUp"
                          : "priceDown"
                      }`}
                    >
                      {Math.round(
                        coin.price_change_percentage_1h_in_currency * 100
                      ) / 100}
                      %
                    </h6>
                  </span>
                  <span className="d-flex">
                    24Hour
                    <h6
                      className={`ms-2 lead ${
                        coin.price_change_percentage_24h_in_currency >= 0
                          ? "priceUp"
                          : "priceDown"
                      }`}
                    >
                      {Math.round(
                        coin.price_change_percentage_24h_in_currency * 100
                      ) / 100}
                      %
                    </h6>
                  </span>
                  <span className="d-flex">
                    1week
                    <h6
                      className={`ms-3 lead ${
                        coin.price_change_percentage_7d_in_currency >= 0
                          ? "priceUp"
                          : "priceDown"
                      }`}
                    >
                      {Math.round(
                        coin.price_change_percentage_7d_in_currency * 100
                      ) / 100}
                      %
                    </h6>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="d-flex mt-2 bg-darkbluegradient justify-content-center">
        <button
          onClick={() => setPageIndex(pageIndex > 0 ? pageIndex - 1 : 0)}
          className={"btn text-light col-1 rounded-0"}
        >
          {"\u21E0"}
        </button>
        <button
          onClick={() => setPageIndex(0)}
          className={`btn text-light col-1 rounded-0 ${
            pageIndex == 0 ? " text-muted" : ""
          }`}
        >
          1
        </button>
        <button
          onClick={() => setPageIndex(1)}
          className={`btn text-light col-1 rounded-0 ${
            pageIndex == 1 ? " text-muted" : ""
          }`}
        >
          2
        </button>
        <button
          onClick={() => setPageIndex(2)}
          className={`btn  text-light col-1 rounded-0 ${
            pageIndex == 2 ? " text-muted" : ""
          }`}
        >
          3
        </button>
        <button
          onClick={() => setPageIndex(3)}
          className={`btn  text-light col-1 rounded-0 ${
            pageIndex == 3 ? " text-muted" : ""
          }`}
        >
          4
        </button>
        <button
          onClick={() => setPageIndex(4)}
          className={`btn text-light col-1 rounded-0 ${
            pageIndex == 4 ? " text-muted" : ""
          }`}
        >
          5
        </button>
        <button
          onClick={() => setPageIndex(5)}
          className={`btn text-light col-1 rounded-0 ${
            pageIndex == 5 ? " text-muted" : ""
          }`}
        >
          6
        </button>
        <button
          onClick={() => setPageIndex(pageIndex + 1)}
          className="btn text-light col-1 rounded-0"
        >
          {"\u21E2"}
        </button>
      </div>
    </div>
  );
};
export default Index;
