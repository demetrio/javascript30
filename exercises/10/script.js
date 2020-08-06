const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
let lastChecked;

//console.log(checkboxes);

function handleCheck(e) {
  //console.log(e);

  let inBetween = false;

  if (e.shiftKey && this.checked) {
    checkboxes.forEach(checkbox => {
      if ((checkbox === this) | (checkbox === lastChecked)) {
        inBetween = !inBetween;
      }

      console.log(this.checked);
      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }
  lastChecked = this;
}

//
checkboxes.forEach(element => element.addEventListener('click', handleCheck));
