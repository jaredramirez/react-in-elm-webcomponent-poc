import React from "react";
import ReactDOM from "react-dom";

WebComponents.waitFor(() => {
  customElements.define(
    "x-howdy",
    class extends HTMLElement {
      constructor() {
        super();
        this._message = this.message || "Howdy!";
      }
      get message() {
        return this._message;
      }
      set message(newMessage) {
        this._message = message;
      }
      connectedCallback() {
        const mountPoint = document.createElement("div");
        this.attachShadow({ mode: "open" }).appendChild(mountPoint);

        ReactDOM.render(<span>{this._message}</span>, mountPoint);
      }
      disconnectedCallback() {
        ReactDOM.unmountComponentAtNode(this);
      }
    }
  );
});
