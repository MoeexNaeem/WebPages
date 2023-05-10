/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { Common } from "./Common";
import rocket from '../components/rocket.png'
import { Section } from "./Section";

export const Home = () => {
  return (
    <>
      <Common
        name="Grow your busniess with"
        btn="Get Started"
        visit="/service"
        img={rocket}
      />
    </>
  );
};
