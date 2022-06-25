import React from "react";
import style from "./style.module.css";

export default function index({ type }) {
  return <div className={`${style.singleType} ${style[type]}`}>{type}</div>;
}
