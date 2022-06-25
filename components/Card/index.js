/* eslint-disable @next/next/no-img-element */
import React from "react";
import style from "./style.module.css";

import Types from "../Types";

import padZeros from "../../utilities/padZeros";

export default function index({ name, types, image, index }) {
  return (
    <div className={style.main}>
      <div className={style.card_name}>{`${padZeros(index)} ${name}`}</div>
      <img className={style.card_image} src={image} alt={name} />
      <div className={style.card_type}>
        {types.map((type, index) => {
          return <Types key={index} type={type} />;
        })}
      </div>
    </div>
  );
}
