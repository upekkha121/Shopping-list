const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');

const addItem = (e) => {
    e.preventDefault();
    const newItem = itemInput.value;

    //Validate Input
    if(newItem === ''){
        alert('Please add and item');
        return;
    }

    // Create list item
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(newItem));
    
    const button = createButton('remove-item btn-link text-red');
    li.appendChild(button);
    itemList.appendChild(li);
    
    itemInput.value = "";
};

const createButton = (classes) => {
    const button = document.createElement('button');
    button.className = classes;
    const icon = createIcon('fa-solid fa-xmark');
    button.appendChild(icon);
    return button;
};

const createIcon = (classes) =>{
    const icon = document.createElement('i');
    icon.className = classes;
    return icon;
}

itemForm.addEventListener("submit", addItem);