'usestrict';

// todo
// 1. We need to test addItem, by setting up the render funciton 
// 2. We need to set up itemChecked, then set up in the render function 
// 3. We need to test removeItem, set up in the render function
// 4. Initialize the shopping list (update)
// 5. Fix section 5 -- Initialize section 


//Section 1 Setting up AppState:

var state = {
    items: [
      //  {name: 'apple', checked: false}; // test
    ]
};

//Section 2 Modification functions
//input needs to show once clicking the "return" or "add item" button 

function addItem (state, item){
    var objectToAdd = {name: item, checked: false};
    // state.items.push(item);
    state.items.push(objectToAdd);
    
}

// var state = { items: [ { name: 'bananas', checked: false } ] }
// checkItem(state, 0)
// { items: [ { name: 'bananas', checked: true } ] }

function checkItem (state, index) {
    // find an item in state by index
    //console.log('working')
    // console.log(state.item[index]);
    // console.log(index);

// is item checked?
// if ture, uncheck it
// if false, check it

    state.items[index].checked = ????

    if (state.items[index].checked === true) {
        state.items[index].checked;
    }
    else {
        state.items[index].checked.
    }

    //checkItem(state, 0);
}

// var state = { items: [ { name: 'bananas', checked: false } ] }
// removeItem(state, 0)
// { items: [] }

// remove
function removeItem(state, item) {
    // grab item from click of delete button and remove from app state
   // state.items.splice(items,1);
}


//Section 3 Rendering functions 
function render(state, element) {
    // add to html
    var itemClass = item.checked ? "shopping-item__checked : '' ;" // if element checked, add class

    var addHTML = state.items.map(function(item){
        return `<li id=${item.name}>
        <span class="${ itemClass }">${item.name}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div></li>`;
    });
    //console.log('works');
    element.html(addHTML);
};

// Render => User Action => Change to the State (Just Data) => Render

//Section 4 Put everything into the DOM - Event listeners
    $('#js-shopping-list-form').submit(function(event) {
        event.preventDefault();
        addItem(state, $('#shopping-list-entry').val());
        render(state, $('.shopping-list'));
        removeItem(state, $('#shopping-list-entry').val());
    })

    $('.button-label').click(function(event) {
        event.preventDefault();
        checkItem(state, $('.shopping-list'));
    })



//Initialize
$(function() {
     // render(state, $('.shopping-list'));
})









