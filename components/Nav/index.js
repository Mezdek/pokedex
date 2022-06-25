/* eslint-disable @next/next/no-img-element */
import React from "react";
import style from "./style.module.css";

export default function Nav() {
  return (
    <div className={style.main}>
      <div className={style.logo}>
        <img
          className={style.image}
          src="https://upload.wikimedia.org/wikipedia/commons/5/53/Pok%C3%A9_Ball_icon.svg"
          alt="Pokeball"
        />
      </div>
      <div className={style.text}>
        <p>Pokédex</p>
      </div>
    </div>
  );
}
