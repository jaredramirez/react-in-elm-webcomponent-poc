import React from "react";
import registerCustomElement from "./registerCustomElement";

function Howdy(props) {
  const message = props.getProperty("message") || "Howdy!";
  return <span> {message}</span>;
}

registerCustomElement(Howdy, "x-howdy");
