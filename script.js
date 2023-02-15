// pseudo code for our To Do App

// 1) lets save the values / DOM elements we will need to interact with

    // Let's query the DOM for the form element and save it in a variable

    // Let's query the DOM for the input element and save it in a variable


// 2) Attach an event listener to the form element
    // pass in 2 arguements to the event listener method:
        // a) the event you are listening for
        // b) the callback function which will hold the logic we wish to run ONCE the event "is heard" (AKA occurs on the page)

        // save the text value from the input within a variable

        // IF the user submits a to do(check whether the value of the input is NOT empty) then:
            // create a li element 
                // add a font awesome icon to the element
                // add the text from the ToDo that the user enetered to li
            
            // append the li element to the ul element
        // ELSE alert the user to please submit a valid to do

// 3) KENZIE's STEP: how to we track when the task if done?
