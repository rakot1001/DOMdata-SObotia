"use strcit";

const btns = document.querySelectorAll("button");
const div = document.querySelector("#root");

for (const btn of btns) {
  btn.addEventListener(
    "click",
    ({
      target: {
        dataset: { color },
        parentNode: localDiv,
      },
    }) => {
      localDiv.style.backgroundColor = color;
    }
  );
}
