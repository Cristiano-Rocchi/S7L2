const saveButton = document.getElementById("saveValue");
const removeButton = document.getElementById("deleteValue");
const text = document.getElementById("textValue");
const savedText = document.getElementById("textSaved");

document.addEventListener("DOMContentLoaded", () => {
  const savedValue = () => {
    const nomeSalvato = localStorage.getItem("names");
    let names;
    if (nomeSalvato) {
      names = JSON.parse(nomeSalvato);
    } else {
      names = [];
    }
    if (names.length > 0) {
      savedText.innerText = names.join(", ");
    } else {
      savedText.innerText = "vuoto";
    }
  };
  savedValue();

  saveButton.addEventListener("click", () => {
    const name = text.value;
    const nomeSalvato = localStorage.getItem("names");
    let names;
    if (nomeSalvato) {
      names = JSON.parse(nomeSalvato);
    } else {
      names = [];
    }
    names.push(name);
    localStorage.setItem("names", JSON.stringify(names));
    savedValue();
  });
  removeButton.addEventListener("click", () => {
    localStorage.removeItem("names");
    savedValue();
  });
});
