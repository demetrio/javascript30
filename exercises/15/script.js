const addItems = document.querySelector('.add-items'); // <form class="add-items">
const itemsList = document.querySelector('.plates'); // <ul class="plates">
const items = [];

// We dont listen to click, we need to listen to submit (imagine an "ENTER")
addItems.addEventListener('submit', addItem);

function addItem(e) {
    e.preventDefault(); // stop reloading

    //console.log(e);
    //console.log(this);

    const text = this.querySelector('[name=item]').value; // this is the form

    const item = {
        text,
        done: false,
    };
    items.push(item);

    //console.log(item);
    populateList(items, itemsList);
    this.reset(); // resets the form
}

function populateList(plates = [], platesList) {
    platesList.innerHTML = plates
        .map((plate, i) => {
            return `
        <li>
        <input type="checkbox" data-index=${i} id="item${i}"/>
            <label for="">${plate.text}</label>
        </li>
        `;
        })
        .join(''); //takes the array and makes it a string
}
