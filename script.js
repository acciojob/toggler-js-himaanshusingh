//your JS code here. If required.
const checkboxes = document.querySelectorAll(".checkbox");
let checkedCount = 0;
let checkedArray = [];

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      checkedCount++;
      checkedArray.push(checkbox);
      if (checkedCount > 2) {
        const firstChecked = checkedArray.shift();
        firstChecked.checked = false;
        checkedCount--;
      }
    } else {
      checkedCount--;
      checkedArray = checkedArray.filter((cb) => cb !== checkbox);
    }
  });
});