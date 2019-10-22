const addItems = document.querySelector('.add-items'); // <form class="add-items">
const itemsList = document.querySelector('.plates'); // <ul class="plates">
const items = JSON.parse(localStorage.getItem('items')) || [];

function addItem(e) {
    e.preventDefault(); // stop reloading

    const text = this.querySelector('[name=item]').value; // this is the form

    const item = {
        text,
        done: false,
    };
    items.push(item);

    localStorage.setItem('items', JSON.stringify(items)); // Need to be a String
    //console.log(item);
    populateList(items, itemsList);
    this.reset(); // resets the form
}

function populateList(plates = [], platesList) {
    platesList.innerHTML = plates
        .map((plate, i) => {
            return `
        <li>
        <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''}/>
            <label for="item${i}">${plate.text}</label>
        </li>
        `;
        })
        .join(''); //takes the array and makes it a string
}

function toggleDone(e) {
    if (!e.target.matches('input')) return; // skip it if it isnt a input

    const el = e.target; // <li> ... </li>
    const index = el.dataset.index;
    items[index].done = !items[index].done;

    localStorage.setItem('items', JSON.stringify(items)); // Need to be a String
    populateList(items, itemsList);
}

// Event Delegation: search for something that its there from the beginning.
itemsList.addEventListener('click', toggleDone);

// We dont listen to click, we need to listen to submit (imagine an "ENTER")
addItems.addEventListener('submit', addItem);

populateList(items, itemsList);
