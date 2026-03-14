import "./style.css";

const textarea = document.querySelector<HTMLTextAreaElement>("#text-input")!;
const countDisplay = document.querySelector<HTMLSpanElement>("#count")!;

textarea.addEventListener("input", () => {
  const length = textarea.value.length;
  countDisplay.textContent = length.toString();
});
