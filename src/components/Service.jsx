/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Card } from "./Card";
import sData from "./sdata";

export const Service = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="os text-center">Services</h1>
      </div>
      <main class="grid container my-5">
        {sData.map((val, ind) => {
          return <Card key={ind} imgSrc={val.imgSrc} title={val.title} />;
        })}
      </main>
    </>
  );
};
