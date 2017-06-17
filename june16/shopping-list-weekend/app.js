// starter files https://github.com/Thinkful-Ed/shopping-list
// Change in state => render state => user event => change in state => render state


// problems
// 1. adding items to the list that contain spaces, example "toilet paper"
// my check item function currently only handles 1 word inputs
// how can i get that to work for spaces? 

// 2. how to require input? [solved] added "required" to html input line
// there is another way, create a validation function and if else it in listeners


// -- APP STATE ------------------------------
const appState = {
	items: [
		{name: "toiletpaper", checked: false},
		{name: "water", checked: false},
	]
};


// -- HTML ITEM TEMPLATE ------------------------------

// originally had this function live under render however seeing the solution,
// i moved it into its own category, template for best practice.

function itemTemplate(state, item){
	// using ternary operator, shorthand for if statement (condition ? value1 : value2)
	const idClass = (item.checked ? "shopping-item__checked" : ""); 
	return `<li id=${item.name}>
        <span class="shopping-item ${idClass}">${item.name}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>
	`
	};


// -- STATE MOD FUNCTIONS (3) ------------------------------

// *-- ADD --*
	// [1] function adds item to shopping cart
	// [2] assigning object template to variable
	// [3] initially, adding items of the same name created duplicates
	// solved by if else statement, if item does not exist, the length would be 0
	// if it does exist, the length would be 1
	// note: use of .length idea came from TA
	// [4] using arrow function

// [1]
function addItem(state, itemName){
	//  console.log('add log works')
	// [2]
	const addObj = {name: itemName, checked: false};
	console.log(state.items.length);
	// [3]
	if(state.items.length === 0){
		console.log(state.items.length);
		state.items.push(addObj);
		//console.log("should add because its the first");
	}
	else{
		// [4]
		if(! state.items.find(item => item.name === itemName) ){ // => 1
		// 		if (! state.items.find(function (item) {
		// 			return item.name === itemName;
		// 		}) == false) {
			state.items.push(addObj);
		}
		console.log("shouldn't add because it is already added");
	}
}

// *-- CHECK --*
	// [1] function toggles checked value
	// [2] using length just the same as addItem
	// [3] .find is a method returns the value of the first element 
	// in the array that satisfies the provided testing function
	// does the name exist, return boolean value.
	// foundItem is a variable that holds the value object state, and within it
	// the item name, it then runs an annomous function to return the value
	// [4] we take that value, grab its checked value and replace that
	// value with its opposite value

// [1]
function checkItem(state, itemName){
	// console.log('check log works)
	// [2]
	if(state.items.length != 0){
		// [3]
		let foundItem = state.items.find(function (item) {
			return item.name === itemName;
		});
			// console.log(foundItem); // example of => {name: "toiletpaper", checked: false}
		// [4]
		if(foundItem){ 
			foundItem.checked = !foundItem.checked;
			// console.log(foundItem); // example of => {name: "toiletpaper", checked: true}
		}
	}
}

// *-- REMOVE --*
function removeItem(state, index){
	// console.log('remove log works)	
	console.log('user just deleted: ' + index);
	state.items.splice(index, 1);
}


// -- RENDER FUNCTIONS ------------------------------

function render(state, element) {
	let itemsHTML = state.items.map(function (item) {
		return itemTemplate(state, item);
	});
    element.html(itemsHTML);
};


// -- EVENT LISTENERS (3) ------------------------------

function iListen(){

	// USER clicked on the "check" button
	$(".shopping-list").on('click', '.shopping-item-toggle' ,function(event){
		event.preventDefault();

		const clickedItem = $(this).closest($('li')).attr('id');
		// console.log("closest item user clicked on is: " + clickedItem);

		checkItem(appState, clickedItem);
		render(appState, $('.shopping-list'));
	});

	//USER clicked on the "Add item" button
	$("#js-shopping-list-form").submit(function(event){
		event.preventDefault();

		const userAdded = ( $("#shopping-list-entry").val() );
		// console.log("user added: " + userAdded);

		addItem(appState, userAdded);
		render(appState, $('.shopping-list'));
	});

	// USER clicked on the "delete" button
	$(".shopping-list").on('click', '.shopping-item-delete' ,function(event){
		event.preventDefault();

		const clickedItem = $(this).closest($('li')).attr('id');
		// console.log("closest item user clicked on is: " + clickedItem);

		removeItem(appState, clickedItem);
		render(appState, $('.shopping-list'));
	});

}

// -- INITIALIZE ------------------------------

$(function () {
	iListen();
	render(appState, $('.shopping-list'));
});