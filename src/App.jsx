import React, { useEffect, useState,useRef } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Github,
  Linkedin,
  FileEarmarkPerson,
} from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import CryptoMasterGIF from "./projectimg/cryptomaster.gif";
import ShopBestGIF from "./projectimg/shopbest.gif";
import TwitterGIF from "./projectimg/twitter.gif";
import emailjs from '@emailjs/browser';
function App() {
  const [slideIndex, setSlideIndex] = useState(0);
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_yyauj5s', 'template_1ad957f', form.current, 'tzNLJ0piq51LkqfCh')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
    const form = useRef();

  /* useEffect(() => {
    document.addEventListener("keydown", handleKeyDown, true);
  }, []) */ /* useEffect(() => {
    window.scrollTo(0, 0);
  }, []); */
  return (
    <div className="App">
      <header className="row col-12">
        <div className="mt-4 d-flex justify-content-between text-start fadeIn p-5">
          <div className="start">
            <h2 className="display-3 ms-5">Guney Yilmazer</h2>
            <h4 className="display-6 ms-5">Front End Developer</h4>
          </div>
          <div className="d-none d-md-block bg-offwhite p-4 rounded-5">
            <div className="btn-group d-flex justify-content-around">
              <Link to="https://github.com/guneyfewm" className="fs-4 text-decoration-none link-dark">
                <Github className="m-2" />
                Github
              </Link>
              <a target="_blank" href="https://www.linkedin.com/in/g%C3%BCney-y%C4%B1lmazer-a12675255/" className="fs-4 text-decoration-none link-dark">
                <Linkedin className="m-2" />
                LinkedIn
              </a>
              <Link className="fs-4 text-decoration-none link-dark">
                <FileEarmarkPerson className="m-2" />
                Resume
              </Link>
            </div>
            <h3 className="fs-2 text-center lead">guneyfewm@gmail.com</h3>
          </div>
        </div>
        <div className="mt-5 fadeIn">
          <div
            className=" position-relative col-12 container-fluid d-flex justify-content-center align-items-center"
            style={{ height: "17vh" }}
          >
            <h2 className={slideIndex !== 0 ? "d-none" : "display-5 "}>
              I'm a front end developer who specializes<br></br> in building
              functional, beautiful looking and engaging websites
            </h2>
            <h2 className={slideIndex !== 1 ? "d-none" : "display-5 mt-5"}>
              
            </h2>
            <h2 className={slideIndex !== 2 ? "d-none" : "display-5 "}>
              
            </h2>
            <div className="position-absolute ms-5 ps-5 start-0 top-50">
              <button
                className="position-relative ms-5 translate-middle btn floatLeft"
                onClick={() => {
                  if (slideIndex > 0) setSlideIndex(slideIndex - 1);
                  else if (slideIndex == 0) setSlideIndex(2);
                }}
              >
                <ChevronLeft />
              </button>
            </div>
            <div className="position-absolute me-5 end-0 top-50">
              <button
                className="position-relative me-5 translate-middle btn floatRight"
                onClick={() => {
                  if (slideIndex <= 1) setSlideIndex(slideIndex + 1);
                  else if (slideIndex == 2) setSlideIndex(0);
                }}
              >
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>
      </header>
      <div className="mt-5 ">
        <a
          href="#projects"
          className="position-relative translate-middle btn goToProjects"
        >
          <ChevronDown />
        </a>
      </div>

      <div className="customMargin">
        <h2 className="display-4">You can check out my projects down below!</h2>
        <h3 className="fs-2 mt-5">
          Matter of fact, this site actually contains all the projects down
          below using React and Redux Toolkit!
        </h3>
        <h6 className="fs-2 mb-5">
          That's why you'll never see any loading or waiting time in this
          portfolio site!
        </h6>
      </div>
      <div id="projects" className="projects d-flex col-12 row">
        <div className=" row d-flex mt-5 justify-content-center">
          <div className="bg-gradientcolor-slow d-flex justify-content-center flex-column rounded-5 col-sm-8 col-xxl-6">
            <Link to="projects/cryptomaster" className="">
              {" "}
              <img
                src={CryptoMasterGIF}
                alt=""
                className="col-10 bg-gradientcolor img-fluid rounded-5 m-5"
              />
            </Link>
            <h4 className="display-5  text-light">Crypto Master 😎</h4>
            <p className="mt-4 text-light">
              A crypto searching application made with React, Bootstrap and
              Axios
              <br></br>It uses Coin Gecko API and gets information about any
              coin you search!
            </p>
            <p className="text-light">
              This project was probably my favourite and most colorful project
              that I have worked on so far!
            </p>
            <div className="btn-group mt-5 d-flex justify-content-center mb-5  ">
              <Link
                to="projects/cryptomaster"
                className="rounded-3 py-5 fs-4 btn btn-light me-5 ms-5"
              >
                Live Preview
              </Link>
              <Link className="rounded-3 py-5 fs-4 btn btn-light ms-5 me-5">
                Code Preview
              </Link>
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="bg-success mt-5 d-flex justify-content-center flex-column rounded-5 col-sm-8 col-xxl-6 p-5">
            <Link to="projects/cryptomaster">
              {" "}
              <img
                src={TwitterGIF}
                alt=""
                className="col-10 bg-gradientcolor img-fluid p-2 rounded-5 m-5"
              />
            </Link>
            <h4 className="display-5  text-light">Tweety</h4>
            <p className="mt-4 text-light">
              A Twitter Clone Made With React And Redux Toolkit
              <br></br>You can post,delete,bookmark and view tweets by clicking on them!
              <br></br>By changing your username,handle or profile picture you update the values in local storage.
            <br></br>Every time you upload an image it gets stored in the "NextTweetImg" property of local storage and every time you upload it it gets reset!
            </p>
            <p className="text-light">
              
            </p>
            <div className="btn-group mt-5 d-flex justify-content-center mb-5  ">
              <Link
                to="projects/tweety/home"
                className="rounded-3 py-5 fs-4 btn btn-light me-5 ms-5"
              >
                Live Preview
              </Link>
              <Link className="rounded-3 py-5 fs-4 btn btn-light ms-5 me-5">
                Code Preview
              </Link>
            </div>
          </div>
          <div className="row d-flex mt-5 justify-content-center">
            <div className="bg-warning d-flex justify-content-center flex-column rounded-5 col-sm-8 col-xxl-6 p-5">
              <Link to="projects/tweety">
                {" "}
                <img
                  src={ShopBestGIF}
                  alt=""
                  className="col-10 bg-gradientcolor img-fluid p-2 rounded-5 m-5"
                />
              </Link>
              <h4 className="display-5  text-light">Shop Best 💯</h4>
              <p className="mt-4 text-light">
                A glasses shop eCommerce website made with React, Redux, React
                Router 6 and Bootstrap
                <br></br>Every time you add an item to your cart you also store
                it in local storage too!
                <br></br> So you'll never lose your items unless you delete
                them!
              </p>
              <p className="text-light"></p>
              <div className="btn-group mt-5 d-flex justify-content-center mb-5  ">
                <Link
                  to="projects/shopbest"
                  className="rounded-3 py-5 fs-4 btn btn-light me-5 ms-5"
                >
                  Live Preview
                </Link>
                <Link className="rounded-3 py-5 fs-4 btn btn-light ms-5 me-5">
                  Code Preview
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="row mt-5 col-12 d-flex justify-content-center align-items-center"
        style={{ height: "800px" }}
      >
        <div
          className="bg rounded-3 col-sm-10 col-xxl-6 p-5 d-flex align-items-center"
          style={{ height: "600px" }}
        >
          <div className="container">
            <h3 className="my-3 text-light">Contact me</h3>

            <form
              ref={form}
              onSubmit={sendEmail}
              className="d-flex justify-content-center"
              id="contactform"
            >
              <div className="d-flex flex-column col-8">
                {" "}
                <input
                  className="mt-3 py-3 nooutline border-0"
                  type="text"
                  name="user_name"
                  placeholder="Your name"
                />
                <input
                  className="mt-3 py-3 nooutline border-0"
                  type="email"
                  name="user_email"
                  placeholder="Your email"
                />
                <textarea
                  className="mt-3 py-5 word-break nooutline border-0 d-flex"
                  style={{ height: "300px" }}
                  type="text-area"
                  name="message"
                  placeholder="Your message"
                ></textarea>
                <input type="submit" value="Send" className="btn btn-success border-0 mt-3 mb-3"/>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="d-md-none bg-offwhite p-4 rounded-5">
            <div className="btn-group d-flex justify-content-around">
              <Link className="fs-4 text-decoration-none link-dark">
                <Github className="m-2" />
                Github
              </Link>
              <a target="_blank" href="https://www.linkedin.com/in/g%C3%BCney-y%C4%B1lmazer-a12675255/" className="fs-4 text-decoration-none link-dark">
                <Linkedin className="m-2" />
                LinkedIn
              </a>
              <Link className="fs-4 text-decoration-none link-dark">
                <FileEarmarkPerson className="m-2" />
                Resume
              </Link>
            </div>
            <h3 className="fs-2 text-center lead">guneyfewm@gmail.com</h3>
          </div>
      <div className="mt-5 d-flex justify-content-center">
        <ul className="display-5 text-start">
          Skills:
          <li className="mt-3">React</li>
          <li>Redux</li>
          <li>React Router</li>
          <li>TypeScript</li>
          <li>Bootstrap</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>Node</li>
          <li>Express</li>
          <li>Photoshop</li>
          <li>Krita</li>
          <li>Illustrator</li>
        </ul>
        <div className="d-flex ms-5 align-items-center ">
          <div className="">
            <h4 className="">And Most Importantly</h4>
            <p className="">The Thrive Of Learning!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
