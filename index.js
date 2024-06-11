const saveButton = document.getElementById("saveValue");
const removeButton = document.getElementById("deleteValue");
const text = document.getElementById("textValue");
const savedText = document.getElementById("textSaved");

document.addEventListener("DOMContentLoaded", () => {
  const savedValue = () => {
    const name = localStorage.getItem("name");
    if (name) {
      savedText.innerText = name;
    } else {
      savedText.innerText = "vuoto";
    }
  };
  savedValue();

  saveButton.addEventListener("click", () => {
    const name = text.value;
    localStorage.setItem("name", name);
  });
  removeButton.addEventListener("click", () => {
    localStorage.removeItem("name");
  });
});
