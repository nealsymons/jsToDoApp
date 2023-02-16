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
            // ALLAN's beautiful multiple whitespace error-handling solution: use the string trim() method the TRIM any additional whitespace from the input value
        const userToDo = inputElement.value.trim();
        console.log(userToDo);

        // NOTE: form inputs ALWAYS return values as strings
            // if the user submits the form without entering anything, that returns an empty string
        
        // IF the user submits a todo (check whether the value of the input is NOT empty) then:

        if (userToDo !== "") {

            console.log(userToDo);

            // create a li element
            const liElement = document.createElement('li');
                // add a FA icon to the li by reassigning the value of that property to be the icon HTML
                liElement.innerHTML = '<i class="fa-regular fa-square"></i>';
                // add the text from the todo that the user entered to the li

                // // alas this will not work because it will overwrite the innerHTML code
                // liElement.textContent = userToDo;

                // append the to do as a child to the li element
                    // because it is text content, we need to specifically create a text NODE and THEN append it
                const toDoText = document.createTextNode(userToDo);
                liElement.appendChild(toDoText);
    
            // append the li element to the ul element
            ulElement.appendChild(liElement);

            // clear the input (value) once the form is submitted:
            inputElement.value = "";
        } else {
            // ELSE alert the user to please submit a valid to do
            alert('Please enter a valid task! Do not leave the input empty.')
        }

    })


// 3) KENZIE'S STEP: how do we track when the task is done?

    // query the DOM for our icon and save the returned DOM node within a variable
    // THIS WILL NOT WORK BECAUSE THIS CODE WILL RUN AS SOON AS THE PAGE/APP LOADS AND THE ICON DOES NOT EXIST YET!!!!!

    // EVENT DELEGATION TIME!
    // add a click event listener to the existing parent element on the page and then figure out how to specifically target the icon which was clicked on
        // we can use the event object to find out exactly where the event occurred and hone in on that specific icon!
    ulElement.addEventListener('click', function(event) {

        // this object gives us information about the event which occurred
        console.log(event);
        // the target property on the event object gives us information about WHAT exactly on the page was targetted when/where the event occurred
        console.log(event.target);

        // only when the icon is clicked do we want to update the checkbox to be unchecked!
        // isolate where the click event occurs - ONLY if it occurs on the icon do we want to run the code to update "checking the checkbox" (AKA updating the rendered FA icon)
        if (event.target.tagName === 'I') {
            const iElement = event.target;

            // toggle the fontawesome icon class so that if it's checked it should be unchecked and vice versa!
            iElement.classList.toggle('fa-square');
            iElement.classList.toggle('fa-square-check');

        }
    })