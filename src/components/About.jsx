import React from "react";
import { Common } from "./Common";
import aboutUS from './images/aboutUS.png'

export const About = () => {
  return (
    <>
      <Common
        name="Create your Connection with"
        btn="Contact Us"
        visit="/contact"
        img={aboutUS}
      />
    </>
  );
};
