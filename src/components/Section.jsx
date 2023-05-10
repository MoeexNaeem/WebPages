import React from "react";
import { NavLink } from "react-router-dom";

export const Section = () => {
  return (
    <>
      <div className="hero">
        <div className="section_heading">Services</div>
        <main class="grid container my-5">
        <div classNameName="col-md-4 col-10 mx-auto my-3 ">
            <div className="card">
              <img src="" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <NavLink to="" className="btn btn-primary">
                  Go somewhere
                </NavLink>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};
