const visualDom = (element, child) => {
  const e = document.createElement("div");
  e.innerHTML = child;
  element.appendChild(e);
};

export { visualDom };
