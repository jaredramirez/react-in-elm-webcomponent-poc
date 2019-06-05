// From https://gist.github.com/sporto/627d6c895fcade2564fc7d01851371c2
import "document-register-element";
import React from "react";
import ReactDOM from "react-dom";

function render(ComponentClass) {
  return function() {
    const attributesCopy = [].slice.call(this.attributes);
    ReactDOM.render(
      <ComponentClass getProperty={propertyName => this[propertyName]} />,
      this
    );
  };
}

function detach() {
  ReactDOM.unmountComponentAtNode(this);
}

function created() {
  // Flow requires createdCallback
}

// TODO: Type ComponentClass properly
function registerCustomElement(ComponentClass, tagName) {
  const elementPrototype = Object.create(HTMLElement.prototype);

  elementPrototype.attachedCallback = render(ComponentClass);
  elementPrototype.attributeChangedCallback = render(ComponentClass);
  elementPrototype.detachedCallback = detach;
  elementPrototype.createdCallback = created;

  try {
    return document.registerElement(tagName || ComponentClass.displayName, {
      prototype: elementPrototype
    });
  } catch (e) {
    throw e;
  }
}

export default registerCustomElement;
