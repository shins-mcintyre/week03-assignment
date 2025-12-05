# week03-assignment

clicker game

Reflection
Please also provide an assignment reflection in your project README.md file.

Required
🎯 What requirements did you achieve?

##Fetch upgrade data from the provided API and at least one upgrade from the API update the cookie count.

- I fetched the data from the API with no issues - I have used the name so far but plan to use the other elements to create a loop in the upgrade setInterval thing (the cost and increase)

##Ensure that functions are used effectively to keep code organised and reusable.

- At first I was afraid to try the loop in case it was too difficult but I soon realised it would be MUCH easier than doing everything separately and it actually wasn't too hard once I tried. For some reason I though lots of separate functions would be easier, but because of scope I found it better to make one big function for the shop functionality

##Implement event listeners to handle user interactions.

- Yes I did this ok - some issues but that was down to syntax usually!

##Use local storage to save and restore the cookie count and relevant game information.
##Use setInterval to increment the cookie count and manage the game state each second.
Managing the game state includes saving progress and updating the DOM.

- I have managed to implement this (finally!) after lots of trial and error - as I initially was putting the interval function into the loop. However , currently I do not have it set up so that the purchased items add up (if fps is 1 and I purchase the first upgrade again, the counter does not increase to 2 flowers per second like it the cookie game) - I will see if implementing local storage has any effect on this, and if not if I have time I will try to work this out

🎯 Were there any requirements or goals that you were unable to achieve?
🎯 If so, what was it that you found difficult about these tasks?
Optional
🏹 Feel free to add any other reflections you would like to share about your submission, for example:

Requesting feedback about a specific part of your submission.
What useful external sources helped you complete the assignment (e.g Youtube tutorials)?
What errors or bugs did you encounter while completing your assignment? How did you solve them?
What went really well and what could have gone better?
