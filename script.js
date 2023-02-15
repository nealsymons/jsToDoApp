// Pseudo code for our To Do App:

// 1) Save the values / DOM elements we will need to interact with
    
    // let's query the DOM for the form element and save it within a variable
    const formElement = document.querySelector('form');

    // let's query the DOM for the input element and save it within a variable
    const inputElement = document.querySelector('#toDoItem');

    // let's query the DOM for the ul element and save it within a variable
    const ulElement = document.querySelector('ul');


// 2) Attach a submit event listener to the form element
    // pass in 2 arguments to the event listener method:
        // a) the event you are listening for (in 'string' format)
        // b) the callback function which will hold the logic we wish run ONCE the event "is heard" (AKA occurs on the page)
            // every time an event occurs, an event object is generated (we're going pass that obj into the scope of the callback func)
    formElement.addEventListener('submit', function(event) {

        // the default behaviour of a form is to refresh the page SO we need to tell it NOT to carry out its default behaviour
        event.preventDefault();

        // log out the unique event object that is generated when the submit event is occurrred
        console.log(event);

        // save the entered text value from the input within a variable
            // NOTE: any info entered into an input element will always be available at the value property
        const userToDo = inputElement.value;

        // NOTE: form inputs ALWAYS return values as strings
            // if the user submits the form without entering anything, that returns an empty string
        
        // IF the user submits a todo (check whether the value of the input is NOT empty) then:
            // STRETCH ERROR-HANDLING GOAL (courtesy of Roberto:) how do we avoid adding empty strings with multiple space characters (probably RegEx)
        if (userToDo !== "") {

            console.log(userToDo);

            // create a li element
            const liElement = document.createElement('li');
                // add a FA icon to the li by reassigning the value of that property to be the icon HTML
                liElement.innerHTML = '<i class="fa-regular fa-square"></i>';
                // add the text from the todo that the user entered to the li
                // liElement.textContent = userToDo;





                const toDoText = document.createTextNode(userToDo);
                liElement.appendChild(toDoText);
            // append the li element to the ul element
                ulElement.appendChild(liElement);
    
                // clear the input (value) after the for is submitted
                inputElement.value = "";

        } else {
            // ELSE alert the user to please submit a valid to do
            alert('Please enter a valid task! Do not leave the input empty.')
        }

    })



// 3) KENZIE'S STEP: how do we track when the task is done?
