import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/footer/FooterAnimation";
import "../views/Penguin.css";

const Penguin = () => {
  return (
    <>
      {/*<section className="error-page-wrapper">*/}
      <div className="container-xl">
        <div className="nav-bar d-flex justify-content-between align-items-center flex-sm-row flex-column m-2 ">
          <div
            id="nav-left"
            className="d-flex justify-content-between align-items-center"
          >
            <div className="logo d-flex align-items-center justify-content-center">
              <img
                className="rounded-circle me-2"
                style={{ width: "60px", backgroundColor: "#84e" }}
                src="/pp1.png"
                alt="Logo"
              />
              <p id="para" className="mb-0 fw-bold text-uppercase text-dark">
                ploygon<span style={{ color: "#84e" }}>pengiun</span>{" "}
              </p>
            </div>
            <div className="home-btn ms-4">
              <Link
                to=""
                className="d-flex justify-content-center align-items-center btn btn-lg text-uppercase"
                style={{ color: "#555", outline: "none" }}
              >
                <svg
                  className="me-3"
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  fill="currentColor"
                  class="bi bi-house"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
                  ></path>
                </svg>
                Home
              </Link>
            </div>
          </div>
          <div className="d-flex justify-content-end nav-right">
            <Link
              to=""
              className="btn-sm text-capitalize"
              style={{
                border: "2px solid #84e",
                borderRadius: "40px",
                color: "#84e",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="currentColor"
                class="bi bi-person"
                viewBox="0 0 16 16"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"></path>
              </svg>
              my polygonPengiuns
            </Link>
          </div>
        </div>
        <div id="search-bar" className="d-flex justify-content-start align-items-center my-5" style={{border:"1px solid #555", borderRadius:"20px"}}>
          <form className="search w-100 px-3 d-flex justify-content-center align-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              class="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
            <input id="input" className="ms-1 fs-5" type="text" placeholder="Search by Penguin ID..." />
          </form>
        </div>
        <div id="galllery-pics" className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
          <div className="col">
            <div className={'item'}>
            <img src="/img/preview/light-creative.png" alt="" />
            </div>
          </div>
          <div className="col">
            <div className={'item'}>

            <img src="/img/preview/light-creative.png" alt="" />
            </div>
          </div>
          <div className="col">
            <div className={'item'}>

            <img src="/img/preview/sidebar-light.png" alt="" />
            </div>
          </div>
          <div className="col">
            <div className={'item'}>
            <img src="/img/preview/light-creative.png" alt="" />
            </div>
          </div>

          <div className="col">
            <div className={'item'}>
              <img src="/img/preview/light-creative.png" alt="" />
            </div>
          </div>

          <div className="col">
            <div className={'item'}>
              <img src="/img/preview/light-creative.png" alt="" />
            </div>
          </div>

        </div>
        <hr />
        <div className="raffle-btn my-4">
        <Link
              to=""
              className="btn-lg text-capitalize"
              style={{
                border: "2px solid #84e",
                borderRadius: "0px",
                color: "#84e",
              }}
            >
              Enter Raffle
            </Link>
        </div>
      </div>
      {/*</section>*/}
      {/* End Error Page Wrapper */}

      {/* Footer */}
      <footer className="footer white">
        <div className="container">
          <Footer />
        </div>
      </footer>
      {/* End footer */}
    </>
  );
};

export default Penguin;
