'usestrict';

//Section 1 Setting up AppState:

var state = {
	items: [
		{name: 'apple', checked: false}; // test
	]
};

//Section 2 Modification functions
//input needs to show once clicking the "return" or "add item" button 

function addItem (state, item){
	var objectToAdd = {name: item, checked: false};
	// state.items.push(item);
    state.items.push(objectToAdd);
    
}

//check
function itemChecked (state, item) {
	// var bob = items.checked 
	// 	//.shopping-item__checked or nothing here

 //    state.items.find(function(item) {
 //    	if (item === .shopping-item__checked) {
 //    		//do this 
 //    	}
 //    	else {
 //    		//do that
 //    	}
 //    })


    // is item checked? 
    // if true, uncheck it
    // else false, check it
}

// remove
function removeItem(state, item) {
    // grab item from click of delete button and remove from app state
    state.items.splice(items,1);
}

// Tests
console.log(state);


//Section 3 Rendering functions 
function render(state, something) {
    // add to html
}


//Section 4 Put everything into the DOM - Event listeners
function handleIt(state) {
    $('.submit').submit(function(event) {
        event.preventDefault();
        addItem(state, $('#shopping-list-entry').val());
    })
}



//Initialize
// $(function() {
//     render(parm1, parm2);
//     handleIt(parm)
// })