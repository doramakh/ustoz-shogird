var $_ = (selector, node = document) => {
  return node.querySelector(selector);
};

var $$_ = (selector, node = document) => {
  return node.querySelectorAll(selector);
};

var createElement = (element, elementClass, text) => {
  var newElement = document.createElement(element);
  
  if (elementClass) {
    newElement.setAttribute('class', elementClass);
  };
  
  if (text) {
    newElement.textContent = text;
  };
};
