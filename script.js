// finding elements

const fontSize = document.getElementById("fontSize");
const bgColor = document.getElementById("bacgroundColor");
const contant = document.querySelector(".textContant");
const resetbtn = document.querySelector("#reset");

// setup styles from local  Storage
// LS = local storage
const onloeadStyle = (fontSizeLS, bgColorLS) => {
  fontSize.value = fontSizeLS;
  contant.style.fontSize = fontSizeLS;
  bgColor.value = bgColorLS;
  contant.style.backgroundColor = bgColorLS;
};

(() => {
  const fontSizeLS = localStorage.getItem("fontSize");
  const bgColorLS = localStorage.getItem("bgColor");
  if (fontSizeLS && bgColorLS) {
    onloeadStyle(fontSizeLS, bgColorLS);
  } else if (!fontSizeLS && bgColorLS) {
    onloeadStyle("16px", bgColorLS);
  } else if (fontSizeLS && !bgColorLS) {
    onloeadStyle(fontSizeLS, "");
  } else if (!fontSizeLS && !bgColorLS) {
    onloeadStyle("16px", "");
  }
})();

fontSize.addEventListener("change", (event) => {
  localStorage.setItem("fontSize", event.target.value);
  contant.style.fontSize = localStorage.getItem("fontSize");
});
bgColor.addEventListener("change", (event) => {
  localStorage.setItem("bgColor", event.target.value);
  contant.style.backgroundColor = localStorage.getItem("bgColor");
});

resetbtn.addEventListener("click", () => {
  localStorage.removeItem("fontSize");
  localStorage.removeItem("bgColor");
  onloeadStyle("16px", "");
});
